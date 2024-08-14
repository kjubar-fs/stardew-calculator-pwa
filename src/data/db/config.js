/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 4:51:54 PM
 *  Last update: 7 Aug 2024, 5:31:02 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// setup Firebase app connection
const firebaseConfig = {
    apiKey: "AIzaSyBDrUW9YUgeiQ3VKyJCqX_LlKdXAqzoAio",
    authDomain: "stardew-calculator.firebaseapp.com",
    projectId: "stardew-calculator",
    storageBucket: "stardew-calculator.appspot.com",
    messagingSenderId: "1045200650360",
    appId: "1:1045200650360:web:b2c7280d955d6115486d8d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// collection names
export const userIdsColl = "userIds";
export const settingsColl = "settings";