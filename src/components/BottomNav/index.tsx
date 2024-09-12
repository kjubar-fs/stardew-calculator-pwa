/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 2:49:09 PM
 *  Last update: 12 Sep 2024, 12:16:15 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "../../data/state/store";

import styles from "./styles.module.css";

//#region types
type BottomNavTab = {
    path: string,
    name: string,
};

interface BottomNavProps {
    tabList: BottomNavTab[],
};
//#endregion

export default function BottomNav({ tabList }: BottomNavProps) {
    // validate props
    if (!tabList || tabList.length === 0) {
        throw new Error("Error creating BottomNav: tabList must be provided and have at least one tab.");
    }

    // get vibration setting
    const vibrationEnabled = useSelector((state: RootState) => state.settings.deviceFeatures.vibration);

    // get current location, for marking active tab
    const location = useLocation();

    // get the navigate function
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={`scrollable ${styles.contentContainer}`}>
                <Outlet />
            </div>
            <div className={styles.tabContainer}>
                {tabList.map((tab, index) => {
                    const label = tab.name;

                    // on pressing the tab
                    const onPress = () => {
                        // vibrate if setting enabled
                        if (vibrationEnabled) {
                            navigator.vibrate(100);
                        }

                        // navigate
                        if (tab.path !== location.pathname) {
                            navigate(tab.path);
                        }
                    };

                    return (
                        <button
                            key={index}
                            onClick={onPress}
                            className={
                                `${styles.tabBtn}
                                ${tab.path === location.pathname ? styles.tabBtnSelected : ""}`
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