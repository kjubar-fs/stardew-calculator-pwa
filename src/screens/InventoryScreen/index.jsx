/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 4:16:13 PM
 *  Last update: 16 Aug 2024, 9:32:12 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useSelector } from "react-redux";

import ButtonWithIcon from "../../components/ButtonWithIcon";

import styles from "./styles.module.css";

export default function InventoryScreen() {
    const categoryList = useSelector((state) => state.categories);

    return (
        <div className={`navContainer ${styles.container}`}>
            {categoryList.map((category) => (
                <ButtonWithIcon
                    key={category.id}
                    onClick={() => console.log(category.displayName)/*navigation.navigate("ItemList", { category })*/}
                    caption={category.displayName}
                />
            ))}
        </div>
    );
}