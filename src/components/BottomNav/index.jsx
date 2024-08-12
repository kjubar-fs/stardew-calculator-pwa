/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 2:49:09 PM
 *  Last update: 12 Aug 2024, 4:15:15 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useState } from "react";

import styles from "./styles.module.css";

export default function BottomNav({ screenComponents, tabNames, initialTab }) {
    // validate props
    if (!screenComponents || !tabNames || screenComponents.length === 0 || tabNames === 0) {
        throw new Error("Error creating BottomNav: screenComponents and tabNames must be provided.");
    }
    if (screenComponents.length !== tabNames.length) {
        throw new Error("Error creating BottomNav: screenComponents and tabNames must be the same length.");
    }

    const tabsInitState = [];
    for (let i = 0; i < screenComponents.length; i++) {
        tabsInitState.push({
            component: screenComponents[i],
            name: tabNames[i],
            active: tabNames[i] === initialTab ? true : false,
        });
    }
    if (!initialTab) {
        tabsInitState[0].active = true;
    }
    const [tabs, setTabs] = useState(tabsInitState);

    const getActiveTabComponent = () => {
        return tabs.filter((tab) => tab.active)[0].component;
    };

    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                {getActiveTabComponent()()}
            </div>
            <div className={styles.tabContainer}>
                {tabs.map((tab, index) => {
                    const label = tab.name;

                    // on pressing the tab
                    const onPress = () => {
                        console.log(`Tab ${label} pressed`);
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