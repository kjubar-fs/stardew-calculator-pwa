/*
 *  Author: Kaleb Jubar
 *  Created: 16 Aug 2024, 11:08:43 AM
 *  Last update: 11 Sep 2024, 6:14:44 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useSelector } from "react-redux";

import { useParams, Link } from "react-router-dom";

import TopNav from "../../components/TopNav";
import ButtonWithIcon from "../../components/ButtonWithIcon";

import styles from "./styles.module.css";

export default function ItemListScreen() {
    const params = useParams();

    const category = useSelector((state) => state.categories.primary[params.categoryId]);
    
    const itemList = Object.values(
                        useSelector((state) => state.items)
                     ).filter((item) => item.category === +params.categoryId);

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
                            iconSize={40}
                        />
                    </Link>
                ))}
            </div>
        </TopNav>
    );
}