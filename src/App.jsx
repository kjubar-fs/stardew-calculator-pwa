/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 1:13:01 PM
 *  Last update: 12 Aug 2024, 3:13:55 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import styles from './App.module.css';
import BottomNav from './components/BottomNav';

export default function App() {
    return (
        <>
            <h1 className={styles.headerWhite}>Stardew Calculator - Web</h1>
            <BottomNav />
        </>
    );
}