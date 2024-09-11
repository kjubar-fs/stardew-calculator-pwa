/*
 *  Author: Kaleb Jubar
 *  Created: 16 Aug 2024, 9:34:05 AM
 *  Last update: 29 Aug 2024, 2:49:27 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

export default function TopNav({ children, title, showBack }) {
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