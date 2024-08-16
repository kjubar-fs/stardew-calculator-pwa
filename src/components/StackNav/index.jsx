/*
 *  Author: Kaleb Jubar
 *  Created: 16 Aug 2024, 9:34:05 AM
 *  Last update: 16 Aug 2024, 11:19:41 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import React, { useState } from "react";

import styles from "./styles.module.css";

export default function StackNav({ screens }) {
    // validate props
    if (!screens || screens.length === 0) {
        throw new Error("Error creating StackNav: screens must be provided and have at least one screen.");
    }

    const [activeScreens, setActiveScreens] = useState([screens[0]]);

    /**
     * @returns a NavScreen representing the current screen
     */
    const getCurrentScreen = () => {
        return Object.assign(new NavScreen(), activeScreens[activeScreens.length - 1]);
    };

    const navigation = {
        /**
         * Add a new instance of the specified screen to the stack.
         * @param {string} screenName screen to navigate to
         * @param {any} params parameters to pass to screen
         */
        navigate: (screenName, params) => {
            // attempt to find screen
            const screenToAdd = screens.find((screen) => screen.name === screenName);
            if (!screenToAdd) {
                throw new Error(`Cannot navigate: no screen named ${screenName}.`);
            }

            // push a new screen
            const newScreens = [...activeScreens];
            newScreens.push({...screenToAdd, params});
            setActiveScreens(newScreens);
        },

        /**
         * Pop off the top screen from the nav, if we're not at the bottom already.
         */
        pop: () => {
            if (activeScreens.length <= 1) {
                return;
            }

            const newScreens = [...activeScreens];
            newScreens.pop();
            setActiveScreens(newScreens);
        },

        popToRoot: () => {
            if (activeScreens.length <= 1) {
                return;
            }

            const newScreens = [screens[0]];
            setActiveScreens(newScreens);
        },
    };

    return (
        <div className={styles.container}>
            {!getCurrentScreen().hidesHeader() &&
                <div className={styles.headerContainer}>
                    <h4 className={styles.title}>
                        {getCurrentScreen().getTitle()}
                    </h4>
                    {activeScreens.length !== 1 &&
                        <button
                            className={styles.backBtn}
                            onClick={navigation.pop}
                        >
                            back
                        </button>
                    }
                </div>
            }
            <div className={`scrollable ${styles.container}`}>
                {React.createElement(getCurrentScreen().component, {
                    navigation,
                    route: {
                        params: getCurrentScreen().params,
                    },
                })}
            </div>
        </div>
    );
}

export class NavScreen {
    options;

    constructor (component, name) {
        this.component = component;
        this.name = name;
    }

    getTitle() {
        return this.options?.displayTitle || this.name;
    }

    hidesHeader() {
        return this.options && this.options.hideHeader;
    }
}

export class NavScreenOptions {
    hideHeader;
    displayTitle;
}