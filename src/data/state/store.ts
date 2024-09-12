/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 4:17:44 PM
 *  Last update: 12 Sep 2024, 11:57:12 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import settingsReducer from "./settingsSlice";
import itemDataReducer from "./itemDataSlice";
import categoriesReducer from "./categoriesSlice";
import cookingRecipesReducer from "./cookingRecipesSlice";

const store = configureStore({
    reducer: {
        settings: settingsReducer,
        items: itemDataReducer,
        categories: categoriesReducer,
        cookingRecipes: cookingRecipesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export default store;