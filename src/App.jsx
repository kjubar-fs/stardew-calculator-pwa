/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 1:13:01 PM
 *  Last update: 14 Aug 2024, 12:36:29 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Provider } from 'react-redux';
import store from "./data/state/store";

import BottomNav from './components/BottomNav';
import CalculatorScreen from './screens/CalculatorScreen';
import HomeScreen from './screens/HomeScreen';
import InventoryScreen from './screens/InventoryScreen';

export default function App() {
    return (
        <>
            <Provider store={store}>
                <BottomNav
                    screenComponents={[InventoryScreen, HomeScreen, CalculatorScreen]}
                    tabNames={["Inventory", "Home", "Calculator"]}
                    initialTab="Home"
                />
            </Provider>
        </>
    );
}