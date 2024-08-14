/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 4:20:17 PM
 *  Last update: 14 Aug 2024, 12:37:11 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { createSlice } from "@reduxjs/toolkit";

import objectData from "/game-data/objects.json";

const initialState = objectData;

const itemDataSlice = createSlice({
    name: "itemData",
    initialState,
    reducers: {},
});

// export const { } = itemDataSlice.actions;

export default itemDataSlice.reducer;