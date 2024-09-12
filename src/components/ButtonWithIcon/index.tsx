/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 5:50:50 PM
 *  Last update: 12 Sep 2024, 12:24:46 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import styles from "./styles.module.css";

//#region types
interface ButtonWithIconProps {
    className?: string,
    direction?: "row" | "column",
    src?: string,
    iconSize?: number,
    caption?: string,
    [key: string]: any,
};
//#endregion

/**
 * Custom button component that uses standard styles and animations,
 * and also supports having an icon next to the text.
 */
export default function ButtonWithIcon(props: ButtonWithIconProps) {
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
                ${className || ""}`
            }
            style={{ flexDirection: direction || "row" }}
        >
            {
                // conditionally render the image if src is provided
                src &&
                <img
                    src={src}
                    className={styles.icon}
                    // default to an icon size of 32 if not provided
                    style={{
                        width: iconSize || 32,
                        height: iconSize || 32,
                    }}
                />
            }
            <p
                className={styles.caption}
                style={{
                    minHeight: src ? iconSize || 32 : "",
                }}
            >
                {caption}
            </p>
        </button>
    );
}