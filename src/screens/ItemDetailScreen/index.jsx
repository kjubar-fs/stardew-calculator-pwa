/*
 *  Author: Kaleb Jubar
 *  Created: 16 Aug 2024, 11:26:01 AM
 *  Last update: 4 Sep 2024, 7:14:39 PM
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
                    <pre style={{ textWrap: "wrap" }}>
                        {JSON.stringify(item, null, 4)}
                    </pre>
                </div>
            </div>
        </TopNav>
    );
}