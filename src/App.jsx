/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 1:13:01 PM
 *  Last update: 29 Aug 2024, 12:08:28 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useState } from 'react';

import { Provider } from 'react-redux';
import store from "./data/state/store";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLoader from './components/AppLoader';
import BottomNav, { NavTab } from './components/BottomNav';
import CalculatorScreen from './screens/CalculatorScreen';
import HomeScreen from './screens/HomeScreen';
import InventoryScreen from './screens/InventoryScreen';
import ErrorScreen from "./screens/ErrorScreen/index.jsx";

import styles from "./App.module.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen />,
        errorElement: <ErrorScreen />,
    },
    {
        path: "/inventory",
        element: <InventoryScreen />,
    },
    {
        path: "/calculator",
        element: <CalculatorScreen />,
    },
]);

export default function App() {
    // track online status in a state var to conditionally show offline message
    const [online, setOnline] = useState(navigator.onLine);

    window.addEventListener("online", () => setOnline(true));
    window.addEventListener("offline", () => setOnline(false));

    return (
        <>
            <Provider store={store}>
                <AppLoader />
                <BottomNav
                    tabList={[
                        new NavTab(InventoryScreen, "Inventory"),
                        new NavTab(HomeScreen, "Home"),
                        new NavTab(CalculatorScreen, "Calculator"),
                    ]}
                    initialTab="Home"
                />
                {/* <RouterProvider router={router} /> */}
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