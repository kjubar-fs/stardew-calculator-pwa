/*
 *  Author: Kaleb Jubar
 *  Created: 15 Aug 2024, 10:03:32 AM
 *  Last update: 15 Aug 2024, 11:23:08 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
// globals
export const idbName = "StardewCalculator";
export const idbSettingsStore = "Settings";

/**
 * Open the local IndexedDB.
 * @returns a Promise that resolves to the DB, or rejects if failed
 */
export function openLocalDb() {
    return new Promise((resolve, reject) => {
        // ensure IndexedDB is available
        if (indexedDB) {
            // open DB
            const request = indexedDB.open(idbName, 1);

            // reject on error
            request.onerror = (e) => {
                reject(e.target.error.message);
            };

            // resolve on success
            request.onsuccess = (e) => {
                const db = e.target.result;
                if (db) {
                    resolve(db);
                } else {
                    reject("Database is not available.");
                }
            };

            // handle version changes or initial creation
            request.onupgradeneeded = (e) => {
                const db = e.target.result;

                // create the stores
                db.createObjectStore(idbSettingsStore, { keyPath: "id" });
            };
        }
    });
}