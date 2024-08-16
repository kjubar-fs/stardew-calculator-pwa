/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 4:16:13 PM
 *  Last update: 16 Aug 2024, 11:19:38 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import StackNav from "../../components/StackNav";
import CategoryScreen from "../CategoryScreen";
import ItemListScreen from "../ItemListScreen";

export default function InventoryScreen() {
    return (
        <StackNav screens={[
            // TODO: find a better way to do this than requiring Object.assign()
            {
                component: CategoryScreen,
                name: "Categories",
                options: {
                    hideHeader: true,
                },
            },
            {
                component: ItemListScreen,
                name: "ItemList",
                options: {
                    displayTitle: "Items",
                },
            },
        ]} />
    );
}