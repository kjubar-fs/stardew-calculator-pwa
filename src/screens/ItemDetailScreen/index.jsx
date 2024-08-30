/*
 *  Author: Kaleb Jubar
 *  Created: 16 Aug 2024, 11:26:01 AM
 *  Last update: 30 Aug 2024, 3:45:42 PM
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
                    <pre>{JSON.stringify(item, null, 4)}</pre>
                </div>
            </div>
        </TopNav>
    );
}