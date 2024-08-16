/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 4:16:13 PM
 *  Last update: 16 Aug 2024, 9:52:08 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import StackNav, { NavScreen } from "../../components/StackNav";
import CategoryScreen from "../CategoryScreen";

export default function InventoryScreen() {
    return (
        <div>
            <StackNav screens={[
                new NavScreen(CategoryScreen, "Categories")
            ]} />
        </div>
    );
}