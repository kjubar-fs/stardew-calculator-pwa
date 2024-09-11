/*
 *  Author: Kaleb Jubar
 *  Created: 14 Aug 2024, 12:35:30 PM
 *  Last update: 15 Aug 2024, 1:48:19 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import * as settings from "./state/settingsSlice";

import * as firebaseDbWrite from "./firebase/write";
import * as localDbWrite from "./local/write";

import { settingsSyncTag } from "../includes/variables";

/**
 * Set the value of the specified profession setting for the given user.
 * @param {string} userId user ID to update setting for
 * @param {string} profession profession name
 * @param {boolean} value setting value
 * @param {Dispatch<UnknownAction>} dispatch dispatch used for updating state
 * @returns 
 */
export async function setProfessionSetting(userId, profession, value, dispatch) {
    profession = profession.toLowerCase();

    // get capitalized title to access reducer by name
    const profTitle = `${profession[0].toUpperCase()}${profession.slice(1)}`

    // check we were given a valid profession
    if (!(`set${profTitle}` in settings)) {
        console.log("no function");
        return false;
    }
    const updateFunc = settings[`set${profTitle}`];

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