/*
 *  Author: Kaleb Jubar
 *  Created: 15 Aug 2024, 10:00:27 AM
 *  Last update: 15 Aug 2024, 11:50:43 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { idbSettingsStore, openLocalDb } from "./db";

export function getAllSettings() {
    return new Promise((resolve, reject) => {
        // get IndexedDB
        openLocalDb().then((db) => {
            // open a transaction and set up success/error handlers
            const getAllTx = db.transaction([idbSettingsStore], "readonly");
            getAllTx.onerror = (e) => {
                reject(e.target.error.message);
            };

            // get the store and get all settings
            const getAllStore = getAllTx.objectStore(idbSettingsStore);
            const getAllReq = getAllStore.getAll();
            getAllReq.onerror = (e) => {
                reject(e.target.error.message);
            };
            getAllReq.onsuccess = (e) => {
                resolve(e.target.result);
            };
        }).catch((err) => {
            reject(err);
        });
    });
}