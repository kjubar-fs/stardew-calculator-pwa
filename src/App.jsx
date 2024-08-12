/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 1:13:01 PM
 *  Last update: 12 Aug 2024, 4:18:39 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import BottomNav from './components/BottomNav';
import CalculatorScreen from './screens/CalculatorScreen';
import HomeScreen from './screens/HomeScreen';
import InventoryScreen from './screens/InventoryScreen';

export default function App() {
    return (
        <>
            <BottomNav
                screenComponents={[InventoryScreen, HomeScreen, CalculatorScreen]}
                tabNames={["Inventory", "Home", "Calculator"]}
                initialTab="Home"
            />
        </>
    );
}