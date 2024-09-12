/*
 *  Author: Kaleb Jubar
 *  Created: 16 Aug 2024, 9:34:05 AM
 *  Last update: 12 Sep 2024, 12:30:31 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import React from "react";

import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

//#region types
interface TopNavProps {
    children: React.ReactNode,
    title?: string,
    showBack?: boolean,
};
//#endregion

export default function TopNav({ children, title, showBack }: TopNavProps) {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <h4 className={styles.title}>
                    {title}
                </h4>
                {showBack && 
                    <button
                        className={styles.backBtn}
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        &lt;&ensp;Back
                    </button>
                }
            </div>
            <div className={`scrollable ${styles.container}`}>
                {children}
            </div>
        </div>
    );
}