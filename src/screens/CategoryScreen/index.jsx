/*
 *  Author: Kaleb Jubar
 *  Created: 5 Aug 2024, 7:42:58 PM
 *  Last update: 16 Aug 2024, 9:50:55 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useSelector } from "react-redux";

import ButtonWithIcon from "../../components/ButtonWithIcon";

import styles from "./styles.module.css";

export default function CategoryScreen({ navigation }) {
    const categoryList = useSelector((state) => state.categories);

    return (
        <div className={`navContainer ${styles.container}`}>
            {categoryList.map((category) => (
                <ButtonWithIcon
                    key={category.id}
                    // onPress={() => navigation.navigate("ItemList", { category })}
                    caption={category.displayName}
                />
            ))}
        </div>
    );
}