/*
 *  Author: Kaleb Jubar
 *  Created: 5 Aug 2024, 7:42:58 PM
 *  Last update: 12 Sep 2024, 12:11:00 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { RootState } from "../../data/state/store";

import ButtonWithIcon from "../../components/ButtonWithIcon";

import styles from "./styles.module.css";

export default function CategoryScreen() {
    const categoryList = Object.values(
                            useSelector((state: RootState) => state.categories.primary)
                         );

    return (
        <div className={`navContainer ${styles.container}`}>
            {categoryList.map((category) => (
                <Link
                    key={category.id}
                    to={`${category.id}`}
                >
                    <ButtonWithIcon
                        caption={category.displayName}
                        className={styles.button}
                    />
                </Link>
            ))}
        </div>
    );
}