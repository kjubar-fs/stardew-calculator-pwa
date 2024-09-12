/*
 *  Author: Kaleb Jubar
 *  Created: 29 Aug 2024, 11:40:32 AM
 *  Last update: 12 Sep 2024, 12:10:27 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useRouteError } from "react-router-dom";

import styles from "./styles.module.css";

export default function ErrorScreen() {
    // TODO: figure out a better type for this
    // https://stackoverflow.com/questions/75944820/whats-the-correct-type-for-error-in-userouteerror-from-react-router-dom
    const error: any = useRouteError();
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