/*
 *  Author: Kaleb Jubar
 *  Created: 16 Aug 2024, 11:08:43 AM
 *  Last update: 16 Aug 2024, 11:22:24 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useSelector } from "react-redux";

import ButtonWithIcon from "../../components/ButtonWithIcon";

import styles from "./styles.module.css";

export default function ItemListScreen({ navigation, route }) {
    const allItems = useSelector((state) => state.items);
    const itemList = Object.values(allItems).filter((item) => item.category === route.params.category.id);

    return (
        <div  className={`navContainer ${styles.container}`}>
            {itemList.map((item) => (
                <ButtonWithIcon
                    key={item.id}
                    onClick={() => navigation.navigate("ItemDetail", { itemName: item.name, id: item.id })}
                    caption={item.name}
                />
            ))}
        </div>
    );
}