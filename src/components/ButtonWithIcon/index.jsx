/*
 *  Author: Kaleb Jubar
 *  Created: 6 Aug 2024, 1:31:00 PM
 *  Last update: 12 Aug 2024, 6:14:54 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import styles from "./styles.module.css";

/**
 * Custom button component that uses standard styles and animations,
 * and also supports having an icon next to the text.
 */
export default function ButtonWithIcon(props) {
    // pull out props
    // use destructuring to get a buttonProps object that doesn't have
    // properties not related to the button
    // this way it can be used like a normal button with extra features
    const {
        className, direction,
        src, iconSize,
        caption,
        ...buttonProps
    } = props;

    return (
        <button
            // set props from component props
            {...buttonProps}
            // set custom styles, overriding with provided styles
            // set dynamically based on pressed state
            className={
                `cardWithBorder
                ${styles.button}
                ${className}`
            }
            style={{ flexDirection: direction || "row" }}
        >
            {
                // conditionally render the image if src is provided
                src &&
                <img
                    src={src}
                    // default to an icon size of 32 if not provided
                    style={{
                        width: iconSize || 32,
                        height: iconSize || 32,
                    }}
                />
            }
            <p className={styles.caption}>{caption}</p>
        </button>
    );
}