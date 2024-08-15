/*
 *  Author: Kaleb Jubar
 *  Created: 15 Aug 2024, 10:00:30 AM
 *  Last update: 15 Aug 2024, 11:30:28 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { idbSettingsStore, openLocalDb } from "./db"

/**
 * Store the setting for a given profession for the given user.
 * @param {string} userId user ID to update setting for
 * @param {string} profession profession name
 * @param {boolean} value setting value
 * @returns a Promise that resolves if successfull or rejects if failed
 */
export function setProfessionActive(userId, profession, value) {
    return new Promise((resolve, reject) => {
        // get IndexedDB
        openLocalDb().then((db) => {
            const key = `${userId}_${profession}`;

            // check if this setting for this user is already in the DB
            const getTx = db.transaction([idbSettingsStore]);
            const getStore = getTx.objectStore(idbSettingsStore);
            const getReq = getStore.get(key);
            getReq.onerror = (e) => {
                reject(e.target.error.message);
            }

            // request succeeded, check if we got a result
            getReq.onsuccess = () => {
                // update the object
                if (getReq.result) {
                    updateProfessionActive(db, userId, profession, value).then(() => {
                        resolve();
                    }).catch((err) => {
                        reject(err);
                    });
                } else {
                    // open a transaction and set up success/error handlers
                    const addTx = db.transaction([idbSettingsStore], "readwrite");
                    addTx.oncomplete = () => {
                        resolve();
                    };
                    addTx.onerror = (e) => {
                        reject(e.target.error.message);
                    };

                    // get the store and add the setting
                    const addStore = addTx.objectStore(idbSettingsStore);
                    const addReq = addStore.add({
                        id: key,
                        userId,
                        profession,
                        value,
                    });
                    addReq.onerror = (e) => {
                        reject(e.target.error.message);
                    };
                }
            };
        }).catch((err) => {
            reject(err);
        });
    });
}

function updateProfessionActive(db, userId, profession, value) {
    return new Promise((resolve, reject) => {
        // open a transaction and set up success/error handlers
        const updateTx = db.transaction([idbSettingsStore], "readwrite");
        updateTx.onerror = (e) => {
            reject(e.target.error.message);
        };
        
        // get the store and update the setting
        const updateStore = updateTx.objectStore(idbSettingsStore);
        const updateReq = updateStore.put({
            id: `${userId}_${profession}`,
            userId,
            profession,
            value,
        });
        updateReq.onerror = (e) => {
            reject(e.target.error.message);
        };
        updateReq.onsuccess = () => {
            resolve();
        };
    });
}