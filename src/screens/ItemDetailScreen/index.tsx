/*
 *  Author: Kaleb Jubar
 *  Created: 16 Aug 2024, 11:26:01 AM
 *  Last update: 12 Sep 2024, 12:34:19 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "../../data/state/store";

import TopNav from "../../components/TopNav";

import styles from "./styles.module.css";

export default function ItemDetailScreen() {
    const itemId = useParams().itemId || "0";

    const item = useSelector((state: RootState) => state.items[itemId]);

    // if item is a cooking recipe, fetch the recipe from state
    let recipe;
    if (item.category === 9) {
        recipe = useSelector((state: RootState) => state.cookingRecipes[item.id]);
    }

    return (
        <TopNav showBack={true} title={item.name}>
            <div className="navContainer">
                <div className="cardWithBorder">
                    <pre className={styles.code}>
                        {JSON.stringify(item, null, 4)}
                    </pre>
                    {recipe &&
                        <pre className={styles.code}>
                            {JSON.stringify(recipe, null, 4)}
                        </pre>
                    }
                </div>
            </div>
        </TopNav>
    );
}