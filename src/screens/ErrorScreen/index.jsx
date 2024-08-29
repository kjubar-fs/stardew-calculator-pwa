/*
 *  Author: Kaleb Jubar
 *  Created: 29 Aug 2024, 11:40:32 AM
 *  Last update: 29 Aug 2024, 11:43:40 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useRouteError } from "react-router-dom";

import styles from "./styles.module.css";

export default function ErrorScreen() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="navContainer">
            <div className={`cardWithBorder ${styles.container}`}>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}