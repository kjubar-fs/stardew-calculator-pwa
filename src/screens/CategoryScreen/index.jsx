/*
 *  Author: Kaleb Jubar
 *  Created: 5 Aug 2024, 7:42:58 PM
 *  Last update: 11 Sep 2024, 6:15:44 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import ButtonWithIcon from "../../components/ButtonWithIcon";

import styles from "./styles.module.css";

export default function CategoryScreen() {
    const categoryList = Object.values(
                            useSelector((state) => state.categories.primary)
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