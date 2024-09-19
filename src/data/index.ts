/*
 *  Author: Kaleb Jubar
 *  Created: 14 Aug 2024, 12:35:30 PM
 *  Last update: 17 Sep 2024, 10:17:46 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Action } from "redux";

import { AppDispatch } from "./state/store";
import * as settings from "./state/settingsSlice";

import * as firebaseDbWrite from "./firebase/write";
import * as localDbWrite from "./local/write";

import { settingsSyncTag } from "../includes/variables";

//#region types
interface SyncManager {
    getTags(): Promise<string[]>;
    register(tag: string): Promise<void>;
}
  
declare global {
    interface ServiceWorkerRegistration {
        readonly sync: SyncManager;
    }
  
    interface SyncEvent extends ExtendableEvent {
        readonly lastChance: boolean;
        readonly tag: string;
    }
  
    interface ServiceWorkerGlobalScopeEventMap {
        sync: SyncEvent;
    }
}
//#endregion

/**
 * Set the value of the specified profession setting for the given user.
 * @param userId user ID to update setting for
 * @param profession profession name
 * @param value setting value
 * @param dispatch dispatch used for updating state
 * @returns true if successful, false if not
 */
export async function setProfessionSetting(userId: string, profession: string, value: boolean, dispatch: AppDispatch): Promise<boolean> {
    profession = profession.toLowerCase();

    // get capitalized title to access reducer by name
    const profTitle = `${profession[0].toUpperCase()}${profession.slice(1)}`

    // check we were given a valid profession
    if (!(`set${profTitle}` in settings)) {
        console.log("no function");
        return false;
    }
    
    // @ts-ignore - ignore indexing settings with a string being unsafe
    const updateFunc: (value: boolean) => Action = settings[`set${profTitle}`];

    // assume update will complete and update store first
    dispatch(updateFunc(value));

    // run db update
    // if we're online, use Firebase directly
    if (navigator.onLine) {
        const success = await firebaseDbWrite.setProfessionActive(userId, profession, value);

        // revert store if db update failed
        if (!success) {
            dispatch(updateFunc(!value));
            return false;
        }

        return true;
    } 
    // in offline mode, save to IDB and queue a sync for when we come online
    // but only if the service worker is available
    else if ("serviceWorker" in navigator) {
        // wrap IDB in a try/catch since it works differently than Firebase functions
        try {
            // set in local DB
            await localDbWrite.setProfessionActive(userId, profession, value);
        } catch {
            // revert store if db update failed
            dispatch(updateFunc(!value));
            return false;
        }
        
        // request a sync if one hasn't been requested already
        const reg = await navigator.serviceWorker.ready;
        if (reg.sync) {
            const tags = await reg.sync.getTags();
            if (!tags.includes(settingsSyncTag)) {
                await reg.sync.register(settingsSyncTag);
            }
        }

        return true;
    }
    // if we're offline but have no service worker, just return true to enable state changes
    // I'm not sure this would ever actually happen, but just in case
    else {
        return true;
    }
}