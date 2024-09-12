/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 4:20:17 PM
 *  Last update: 12 Sep 2024, 11:32:08 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { createSlice } from "@reduxjs/toolkit";

import objectData from "/game-data/objects.json";

//#region types
type ItemConsumptionEffects = {
    energy: number,
    health: number,
};

type ItemProductionRecipe = {
    source: string,
    time: number,
    unit: string,
};

type ItemData = {
    id: string,
    nameInternal: string,
    name: string,
    description: string,
    type: string,
    category: number,
    spriteIndex: number,
    texture: string,
    price: number,

    subCategories: number[] | undefined,
    onConsume: ItemConsumptionEffects | undefined,
    productionTime: ItemProductionRecipe[] | undefined,
};

type ItemDataList = {
    [key: string]: ItemData,
};
//#endregion

const initialState: ItemDataList = objectData as ItemDataList;

const itemDataSlice = createSlice({
    name: "itemData",
    initialState,
    reducers: {},
});

// export const { } = itemDataSlice.actions;

export default itemDataSlice.reducer;