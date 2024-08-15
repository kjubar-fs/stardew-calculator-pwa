/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 1:13:01 PM
 *  Last update: 15 Aug 2024, 2:35:34 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useState } from 'react';

import { Provider } from 'react-redux';
import store from "./data/state/store";

import AppLoader from './components/AppLoader';
import BottomNav from './components/BottomNav';
import CalculatorScreen from './screens/CalculatorScreen';
import HomeScreen from './screens/HomeScreen';
import InventoryScreen from './screens/InventoryScreen';

import styles from "./App.module.css";

export default function App() {
    // track online status in a state var to conditionally show offline message
    const [online, setOnline] = useState(navigator.onLine);

    window.addEventListener("online", () => setOnline(true));
    window.addEventListener("offline", () => setOnline(false))

    return (
        <>
            <Provider store={store}>
                <AppLoader />
                <BottomNav
                    screenComponents={[InventoryScreen, HomeScreen, CalculatorScreen]}
                    tabNames={["Inventory", "Home", "Calculator"]}
                    initialTab="Home"
                />
                {!online && 
                    <div className={styles.offlineNotice}>
                        <h2 className={styles.offlineHeader}>You're offline!</h2>
                        <p className={styles.offlineBody}>
                            {
                                "serviceWorker" in navigator ?
                                "Your changes will be saved when you're back online." :
                                "Your changes will not be saved."
                            }
                        </p>
                    </div>
                }
            </Provider>
        </>
    );
}