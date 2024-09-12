/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 4:20:17 PM
 *  Last update: 11 Sep 2024, 7:40:05 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { createSlice } from "@reduxjs/toolkit";

import { userId } from "../../includes/variables";

//#region types
type ProfessionsSettings = {
    rancher: boolean,
    tiller: boolean,
    artisan: boolean,
    tapper: boolean,
    gemologist: boolean,
    blacksmith: boolean,
    fisher: boolean,
    angler: boolean,
};

type DeviceFeaturesSettings = {
    vibration: boolean,
    notification: boolean,
    fullscreen: boolean,
};

type SettingsState = {
    userId: string,
    deviceFeatures: DeviceFeaturesSettings,
    professions: ProfessionsSettings
};
//#endregion

const initialState: SettingsState = {
    userId,     // TODO: remove hardcoded user ID
    deviceFeatures: {
        vibration: false,
        notification: false,
        fullscreen: false,
    },
    professions: {
        rancher: false,
        tiller: false,
        artisan: false,

        tapper: false,

        gemologist: false,
        blacksmith: false,

        fisher: false,
        angler: false,
    },
};

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        // used for loading
        setSettings: (state, action) => {
            const { professions } = action.payload;
            state.professions = professions;
        },

        // professions
        setRancher: (state, action) => {
            state.professions.rancher = action.payload;
        },

        setTiller: (state, action) => {
            state.professions.tiller = action.payload;
        },
        
        setArtisan: (state, action) => {
            state.professions.artisan = action.payload;
        },
        
        setTapper: (state, action) => {
            state.professions.tapper = action.payload;
        },
        
        setGemologist: (state, action) => {
            state.professions.gemologist = action.payload;
        },
        
        setBlacksmith: (state, action) => {
            state.professions.blacksmith = action.payload;
        },
        
        setFisher: (state, action) => {
            state.professions.fisher = action.payload;
        },
        
        setAngler: (state, action) => {
            state.professions.angler = action.payload;
        },

        // device features
        setVibration: (state, action) => {
            state.deviceFeatures.vibration = action.payload;
        },

        setNotification: (state, action) => {
            state.deviceFeatures.notification = action.payload;
        },

        setFullscreen: (state, action) => {
            state.deviceFeatures.fullscreen = action.payload;
        },
    },
});

export const {
    setSettings,
    setRancher, setTiller, setArtisan,
    setTapper,
    setGemologist, setBlacksmith,
    setFisher, setAngler,
    setVibration, setNotification, setFullscreen,
} = settingsSlice.actions;

export default settingsSlice.reducer;