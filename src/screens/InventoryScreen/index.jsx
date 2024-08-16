/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 4:16:13 PM
 *  Last update: 16 Aug 2024, 10:57:21 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import StackNav, { NavScreen } from "../../components/StackNav";
import CategoryScreen from "../CategoryScreen";

export default function InventoryScreen() {
    return (
        <StackNav screens={[
            // TODO: find a better way to do this than requiring Object.assign()
            Object.assign(new NavScreen(), {
                component: CategoryScreen,
                name: "Categories",
                options: {
                    // hideHeader: true,
                },
            }),
        ]} />
    );
}