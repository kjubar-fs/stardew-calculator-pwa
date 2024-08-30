/*
 *  Author: Kaleb Jubar
 *  Created: 16 Aug 2024, 11:26:01 AM
 *  Last update: 29 Aug 2024, 2:51:22 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import TopNav from "../../components/TopNav";

export default function ItemDetailScreen() {
    const params = useParams();

    const item = useSelector((state) => state.items[params.itemId]);

    return (
        <TopNav showBack={true} title={item.name}>
            <div className="navContainer">
                <div className="cardWithBorder">
                    <p>{JSON.stringify(item, null, 4)}</p>
                </div>
            </div>
        </TopNav>
    );
}