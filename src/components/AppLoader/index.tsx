/*
 *  Author: Kaleb Jubar
 *  Created: 14 Aug 2024, 12:46:39 PM
 *  Last update: 11 Sep 2024, 7:17:52 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useEffect, useState } from "react";

import { MessageType } from "../../includes/variables";

import { useSelector, useDispatch } from "react-redux";
import { setSettings } from "../../data/state/settingsSlice";

import { loadUserSettings } from "../../data/firebase/read";

export default function AppLoader() {
    // TODO: replace with loading user ID from local DB or creating
    // get current user ID and make a dispatch for Redux operations
    const userId = useSelector((state) => state.settings.userId);
    const dispatch = useDispatch();

    /**
     * Load user settings.
     */
    const loadSettings = async () => {
        // get settings from Firebase
        const settings = await loadUserSettings(userId);

        // overwrite Redux store with latest data
        dispatch(setSettings(settings));
    };

    // create a mount effect to load
    useEffect(() => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.addEventListener("message", msgHandler);
        }

        loadSettings();

        return () => {
            if ("serviceWorker" in navigator) {
                navigator.serviceWorker.removeEventListener("message", msgHandler);
            }
        };
    }, []);

    // create state, handler, and effect for listening to refresh messages from SW
    const [message, setMessage] = useState(null);
    const msgHandler = (event) => {
        // pull out the data from the message event
        const msg = event.data;
        if (msg && ("type" in msg) && msg.type === MessageType.RefreshData) {
            console.log("data refresh received");
            // message came from our SW and tells us to refresh, so set message to trigger a reload
            setMessage(msg);
        }
    };
    useEffect(() => {
        // message changed, reload data
        loadSettings();

        // TODO: figure out why SettingsModal doesn't rerender when syncing
    }, [message]);
}