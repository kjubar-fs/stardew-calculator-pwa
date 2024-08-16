/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 2:49:09 PM
 *  Last update: 16 Aug 2024, 12:45:11 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import React, { useState } from "react";

import { useSelector } from "react-redux";

import styles from "./styles.module.css";

export default function BottomNav({ tabList, initialTab }) {
    // validate props
    if (!tabList || tabList.length === 0) {
        throw new Error("Error creating BottomNav: tabList must be provided and have at least one tab.");
    }

    // get vibration setting
    const vibrationEnabled = useSelector((state) => state.settings.deviceFeatures.vibration);

    // create initial tab state
    const tabsInitState = [];
    for (let i = 0; i < tabList.length; i++) {
        const newTab = tabList[i];
        newTab.active = newTab.name === initialTab ? true : false;
        tabsInitState.push(newTab);
    }
    // set an active tab if initialTab was not provided
    if (!initialTab) {
        tabsInitState[0].active = true;
    }
    const [tabs, setTabs] = useState(tabsInitState);

    /**
     * @returns the React Component for the currently selected tab
     */
    const getActiveTabComponent = () => {
        return tabs.filter((tab) => tab.active)[0].component;
    };

    return (
        <div className={styles.container}>
            <div className={`scrollable ${styles.contentContainer}`}>
                {React.createElement(getActiveTabComponent())}
            </div>
            <div className={styles.tabContainer}>
                {tabs.map((tab, index) => {
                    const label = tab.name;

                    // on pressing the tab
                    const onPress = () => {
                        const newTabs = [];
                        for (const oldTab of tabs) {
                            const newTab = {...oldTab};
                            newTab.active = newTab.name === label;
                            newTabs.push(newTab);
                        }
                        setTabs(newTabs);

                        // vibrate if setting enabled
                        if (vibrationEnabled) {
                            navigator.vibrate(100);
                        }
                    };

                    return (
                        <button
                            key={index}
                            onClick={onPress}
                            className={
                                `${styles.tabBtn}
                                ${tab.active ? styles.tabBtnSelected : ""}`
                            }
                        >
                            {label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export class NavTab {
    active;
    
    constructor(component, name) {
        this.component = component;
        this.name = name;
    }
}