/*
 *  Author: Kaleb Jubar
 *  Created: 5 Aug 2024, 7:42:58 PM
 *  Last update: 29 Aug 2024, 2:24:29 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import ButtonWithIcon from "../../components/ButtonWithIcon";

import styles from "./styles.module.css";

export default function CategoryScreen() {
    const categoryList = useSelector((state) => state.categories);

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