/*
 *  Author: Kaleb Jubar
 *  Created: 14 Aug 2024, 11:34:33 AM
 *  Last update: 12 Sep 2024, 12:26:28 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useState } from "react";

import styles from "./styles.module.css";

//#region types
interface CheckboxProps {
    initialValue?: boolean,
    onChange?: (val: boolean) => void,
    caption?: string,
    className?: string,
};
//#endregion types

export default function Checkbox({ initialValue, onChange, caption, className }: CheckboxProps) {
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