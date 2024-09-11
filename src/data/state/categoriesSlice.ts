/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 4:20:17 PM
 *  Last update: 6 Sep 2024, 4:11:52 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { createSlice } from "@reduxjs/toolkit";

import categoryData from "/game-data/categories.json";

const initialState = categoryData;

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
});

// export const { } = categoriesSlice.actions;

export default categoriesSlice.reducer;