/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 4:17:44 PM
 *  Last update: 11 Sep 2024, 5:54:32 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { configureStore } from "@reduxjs/toolkit";

import settingsReducer from "./settingsSlice";
import itemDataReducer from "./itemDataSlice";
import categoriesReducer from "./categoriesSlice";
import cookingRecipesReducer from "./cookingRecipesSlice";

export default configureStore({
    reducer: {
        settings: settingsReducer,
        items: itemDataReducer,
        categories: categoriesReducer,
        cookingRecipes: cookingRecipesReducer,
    },
});