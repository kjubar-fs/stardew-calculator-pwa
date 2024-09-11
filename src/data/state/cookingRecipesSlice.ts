/*
 *  Author: Kaleb Jubar
 *  Created: 11 Sep 2024, 5:44:38 PM
 *  Last update: 11 Sep 2024, 5:45:33 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { createSlice } from "@reduxjs/toolkit";

import cookingRecipeData from "/game-data/cookingRecipes.json";

const initialState = cookingRecipeData;

const cookingRecipesSlice = createSlice({
    name: "cookingRecipes",
    initialState,
    reducers: {},
});

// export const { } = cookingRecipesSlice.actions;

export default cookingRecipesSlice.reducer;