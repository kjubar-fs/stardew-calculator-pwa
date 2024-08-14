/*
 *  Author: Kaleb Jubar
 *  Created: 14 Aug 2024, 12:46:39 PM
 *  Last update: 
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setSettings } from "../../data/state/settingsSlice";

import { loadUserSettings } from "../../data/db/read";

export default function AppLoader() {
    // TODO: replace with loading user ID from local DB or creating
    const userId = useSelector((state) => state.settings.userId);
    const dispatch = useDispatch();

    // create a mount effect to load
    useEffect(() => {
        (async () => {
            // load settings
            const settings = await loadUserSettings(userId);
            dispatch(setSettings(settings));
        })();
    }, []);
}