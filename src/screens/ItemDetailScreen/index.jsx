/*
 *  Author: Kaleb Jubar
 *  Created: 16 Aug 2024, 11:26:01 AM
 *  Last update: 11 Sep 2024, 5:55:03 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import TopNav from "../../components/TopNav";

import styles from "./styles.module.css";

export default function ItemDetailScreen() {
    const params = useParams();

    const item = useSelector((state) => state.items[params.itemId]);

    // if item is a cooking recipe, fetch the recipe from state
    let recipe;
    if (item.category === 9) {
        recipe = useSelector((state) => state.cookingRecipes[item.id]);
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