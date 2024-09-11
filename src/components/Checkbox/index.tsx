/*
 *  Author: Kaleb Jubar
 *  Created: 14 Aug 2024, 11:34:33 AM
 *  Last update: 11 Sep 2024, 6:45:40 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useState } from "react";

import styles from "./styles.module.css";

export default function Checkbox({ initialValue, onChange, caption, className }) {
    // allow using initial value, double negate to convert
    // undefined to false if not provided
    const [checked, setChecked] = useState(!!initialValue);

    /**
     * Toggle this checkbox.
     */
    const toggleCheck = () => {
        if (onChange) onChange(!checked);
        setChecked(!checked);
    };

    return (
        <div
            className={styles.container + (!!className ? ` ${className}` : "")}
            onClick={toggleCheck}
        >
            <div
                className={styles.checkbox}
                style={{ backgroundImage:
                            checked ? `url("/assets/checkbox_checked.png")`
                                    : `url("/assets/checkbox_unchecked.png")` }}
            ></div>
            <label className={styles.label}>{caption}</label>
        </div>
    );
}