/*
 *  Author: Kaleb Jubar
 *  Created: 11 Sep 2024, 5:44:38 PM
 *  Last update: 12 Sep 2024, 11:48:47 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { createSlice } from "@reduxjs/toolkit";

import cookingRecipeData from "/game-data/cookingRecipes.json";

//#region types
type RecipeIngredients = {
    [key: string]: number,
};

type RecipeData = {
    name: string,
    ingredients: RecipeIngredients,
    recipeYield: string,
    unlockSources: string[],
};

type RecipeDataList = {
    [key: string]: RecipeData,
};
//#endregion

const initialState: RecipeDataList = cookingRecipeData as RecipeDataList;

const cookingRecipesSlice = createSlice({
    name: "cookingRecipes",
    initialState,
    reducers: {},
});

// export const { } = cookingRecipesSlice.actions;

export default cookingRecipesSlice.reducer;