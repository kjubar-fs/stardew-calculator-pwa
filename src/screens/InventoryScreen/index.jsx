/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 4:16:13 PM
 *  Last update: 16 Aug 2024, 11:27:43 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import StackNav from "../../components/StackNav";
import CategoryScreen from "../CategoryScreen";
import ItemDetailScreen from "../ItemDetailScreen";
import ItemListScreen from "../ItemListScreen";

export default function InventoryScreen() {
    return (
        <StackNav screens={[
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
            {
                component: ItemDetailScreen,
                name: "ItemDetail",
                options: {
                    displayTitle: "Item",
                },
            },
        ]} />
    );
}