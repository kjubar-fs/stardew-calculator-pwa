/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 4:51:57 PM
 *  Last update: 8 Aug 2024, 2:36:40 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { doc, setDoc } from "firebase/firestore";

import { db, settingsColl } from "./config";

/**
 * Update the setting for a given profession for the given user.
 * @param {string} userId user ID to update setting for
 * @param {string} profession profession name
 * @param {boolean} value setting value
 * @returns a boolean representing if the operation was successful
 */
export async function setProfessionActive(userId, profession, value) {
    // create data obj
    const data = { professions: {} }
    data.professions[profession] = value;

    try {
        // have to use setDoc with merge = true instead of updateDoc
        // because we need to update a sub-property of the professions object
        // within the settings
        // this was the only way I could get it to work
        await setDoc(
            doc(db, settingsColl, userId),
            data,
            { merge: true }
        );
        
        return true;
    } catch(err) {
        return false;
    }
}