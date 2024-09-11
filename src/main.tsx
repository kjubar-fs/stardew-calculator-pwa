/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 1:13:01 PM
 *  Last update: 11 Sep 2024, 6:43:17 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "./index.css";

// register the service worker
// if ("serviceWorker" in navigator) {
//     navigator.serviceWorker.register("/service-worker.js", { scope: "/", type: "module" });
// }

// create the React app
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
