/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 2:49:09 PM
 *  Last update: 12 Aug 2024, 3:27:35 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import styles from "./styles.module.css";

export default function BottomNav() {
    const tabs = ["Inventory", "Home", "Calculator"];

    return (
        <div className={styles.container}>
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
                    >
                        <p className={styles.label}>
                            {label}
                        </p>
                    </button>
                );
            })}
        </div>
    );
}