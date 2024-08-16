/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 4:20:17 PM
 *  Last update: 15 Aug 2024, 9:47:24 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { createSlice } from "@reduxjs/toolkit";

import { userId } from "../../includes/variables";

const initialState = {
    userId,     // TODO: remove hardcoded user ID
    deviceFeatures: {
        vibration: false,
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
    },
});

export const {
    setSettings,
    setRancher, setTiller, setArtisan,
    setTapper,
    setGemologist, setBlacksmith,
    setFisher, setAngler,
    setVibration,
} = settingsSlice.actions;

export default settingsSlice.reducer;