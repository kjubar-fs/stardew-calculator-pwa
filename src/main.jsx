/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 1:13:01 PM
 *  Last update: 29 Aug 2024, 11:38:59 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";

import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
]);

// register the service worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js", { scope: "/", type: "module" });
}

// create the React app
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
