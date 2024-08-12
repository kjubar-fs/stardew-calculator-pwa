/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 2:49:09 PM
 *  Last update: 12 Aug 2024, 3:51:59 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import styles from "./styles.module.css";

export default function BottomNav({ children }) {
    const tabs = ["Inventory", "Home", "Calculator"];

    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                {children}
            </div>
            <div className={styles.tabContainer}>
                {tabs.map((tabName, index) => {
                    const label = tabName;

                    // on pressing the tab
                    const onPress = () => {
                        console.log(`Tab ${tabName} pressed`);
                    };

                    return (
                        <button
                            key={index}
                            onClick={onPress}
                            className={styles.tabBtn}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}