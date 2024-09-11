/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 1:13:01 PM
 *  Last update: 11 Sep 2024, 6:44:36 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useState } from "react";

import { Provider } from "react-redux";
import store from "./data/state/store";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import AppLoader from "./components/AppLoader";
import BottomNav from "./components/BottomNav";
import CalculatorScreen from "./screens/CalculatorScreen";
import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import ItemListScreen from "./screens/ItemListScreen";
import ItemDetailScreen from "./screens/ItemDetailScreen";
import ErrorScreen from "./screens/ErrorScreen";

import styles from "./App.module.css";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            element={
                <BottomNav
                    tabList={[
                        {
                            path: "/inventory",
                            name: "Inventory",
                        },
                        {
                            path: "/",
                            name: "Home",
                        },
                        {
                            path: "/calculator",
                            name: "Calculator",
                        },
                    ]}
                />
            }
            errorElement={<ErrorScreen />}
        >
            <Route
                path="/"
                element={<HomeScreen />}
            />
            <Route
                path="/inventory"
                element={<CategoryScreen />}
            />
            <Route
                path="/inventory/:categoryId"
                element={<ItemListScreen />}
            />
            <Route
                path="/inventory/:categoryId/:itemId"
                element={<ItemDetailScreen />}
            />
            <Route
                path="/calculator"
                element={<CalculatorScreen />}
            />
        </Route>
    )
);

export default function App() {
    // track online status in a state var to conditionally show offline message
    // TODO: reenable
    const [online, setOnline] = useState(/*navigator.onLine*/true);

    // window.addEventListener("online", () => setOnline(true));
    // window.addEventListener("offline", () => setOnline(false));

    return (
        <>
            <Provider store={store}>
                <AppLoader />
                <RouterProvider router={router} />
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