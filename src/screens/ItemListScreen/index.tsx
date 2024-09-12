/*
 *  Author: Kaleb Jubar
 *  Created: 16 Aug 2024, 11:08:43 AM
 *  Last update: 12 Sep 2024, 12:34:44 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useParams, Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "../../data/state/store";

import TopNav from "../../components/TopNav";
import ButtonWithIcon from "../../components/ButtonWithIcon";

import styles from "./styles.module.css";

export default function ItemListScreen() {
    const categoryId = useParams().categoryId || "1";

    const category = useSelector((state: RootState) => state.categories.primary[categoryId]);
    
    const itemList = Object.values(
                        useSelector((state: RootState) => state.items)
                     ).filter((item) => item.category === +categoryId);

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