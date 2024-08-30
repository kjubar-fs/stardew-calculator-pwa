/*
 *  Author: Kaleb Jubar
 *  Created: 16 Aug 2024, 11:08:43 AM
 *  Last update: 30 Aug 2024, 3:24:06 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useSelector } from "react-redux";

import { useParams, Link } from "react-router-dom";

import TopNav from "../../components/TopNav";
import ButtonWithIcon from "../../components/ButtonWithIcon";

import styles from "./styles.module.css";

export default function ItemListScreen() {
    const params = useParams();

    const allCategories = useSelector((state) => state.categories);
    const category = Object.values(allCategories).find((cat) => cat.id === +params.categoryId);
    
    const allItems = useSelector((state) => state.items);
    const itemList = Object.values(allItems).filter((item) => item.category === +params.categoryId);

    return (
        <TopNav showBack={true} title={category.displayName}>
            <div className={`navContainer ${styles.container}`}>
                {itemList.map((item) => (
                    <Link
                        key={item.id}
                        to={`${item.id}`}
                    >
                        <ButtonWithIcon
                            caption={item.name}
                            className={styles.button}
                            src={`/assets/sprites/${item.texture}/tile${String(item.spriteIndex).padStart(3, "0")}.png`}
                        />
                    </Link>
                ))}
            </div>
        </TopNav>
    );
}