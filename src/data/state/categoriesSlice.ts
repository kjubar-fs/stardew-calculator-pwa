/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 4:20:17 PM
 *  Last update: 12 Sep 2024, 11:52:24 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { createSlice } from "@reduxjs/toolkit";

import categoryData from "/game-data/categories.json";

//#region types
type Category = {
    id: string,
    name: string,
    displayName: string | undefined,
    iconPath: string | undefined,
};

type CategoryList = {
    [key: string]: Category,
};

type Categories = {
    primary: CategoryList,
    secondary: CategoryList,
};
//#endregion

const initialState: Categories = categoryData as Categories;

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
});

// export const { } = categoriesSlice.actions;

export default categoriesSlice.reducer;