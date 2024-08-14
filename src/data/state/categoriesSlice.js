/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 4:20:17 PM
 *  Last update: 8 Aug 2024, 5:57:24 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { createSlice } from "@reduxjs/toolkit";

// TODO: reenable unused categories
// TODO: rework data parser to fix subcategories
const initialState = [
    // {
    //     id: -2,
    //     displayName: "Gems",
    // },
    {
        id: -4,
        displayName: "Fish",
    },
    {
        id: -5,
        displayName: "Eggs",
        isSubCategory: true,
    },
    {
        id: -6,
        displayName: "Milk",
        isSubCategory: true,
    },
    {
        id: -7,
        displayName: "Cooking Recipes",
    },
    // {
    //     id: -8,
    //     displayName: "Crafting",
    // },
    // {
    //     id: -9,
    //     displayName: "Big Craftables",
    // },
    // {
    //     id: -12,
    //     displayName: "Minerals",
    // },
    // {
    //     id: -15,
    //     displayName: "Metals",
    // },
    // {
    //     id: -16,
    //     displayName: "Building Resources",
    // },
    {
        id: -17,
        displayName: "Sell at Pierre's",
        isSubCategory: true,
    },
    {
        id: -18,
        displayName: "Sell at Pierre's and Marnie's",
        isSubCategory: true,
    },
    // {
    //     id: -19,
    //     displayName: "Fertilizer",
    // },
    // {
    //     id: -20,
    //     displayName: "Junk",
    // },
    // {
    //     id: -21,
    //     displayName: "Bait",
    // },
    // {
    //     id: -22,
    //     displayName: "Tackle",
    // },
    {
        id: -23,
        displayName: "Sell at Willy's",
        isSubCategory: true,
    },
    // {
    //     id: -24,
    //     displayName: "Furniture",
    // },
    {
        id: -26,
        displayName: "Artisan Goods",
    },
    {
        id: -27,
        displayName: "Syrup",
    },
    // {
    //     id: -28,
    //     displayName: "Monster Loot",
    // },
    // {
    //     id: -29,
    //     displayName: "Equipment",
    // },
    // {
    //     id: -74,
    //     displayName: "Seeds",
    // },
    {
        id: -75,
        displayName: "Vegetables",
        isSubCategory: true,
    },
    {
        id: -79,
        displayName: "Fruits",
        isSubCategory: true,
    },
    {
        id: -80,
        displayName: "Flowers",
        isSubCategory: true,
    },
    {
        id: -81,
        displayName: "Forageables", // called "Greens" internally
    },
    // {
    //     id: -95,
    //     displayName: "Hats",
    // },
    // {
    //     id: -96,
    //     displayName: "Rings",
    // },
    // {
    //     id: -98,
    //     displayName: "Weapons",
    // },
    // {
    //     id: -99,
    //     displayName: "Tools",
    // },
];

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
});

// export const { } = categoriesSlice.actions;

export default categoriesSlice.reducer;