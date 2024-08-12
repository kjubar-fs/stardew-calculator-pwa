/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 1:13:01 PM
 *  Last update: 12 Aug 2024, 1:23:03 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
