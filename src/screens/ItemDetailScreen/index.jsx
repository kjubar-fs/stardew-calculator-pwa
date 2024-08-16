/*
 *  Author: Kaleb Jubar
 *  Created: 16 Aug 2024, 11:26:01 AM
 *  Last update: 16 Aug 2024, 11:26:57 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useSelector } from "react-redux";

export default function ItemDetailScreen({ route }) {
    const item = useSelector((state) => state.items[route.params.id]);

    return (
        <div className="navContainer">
            <div className="cardWithBorder">
                <p>{JSON.stringify(item, null, 4)}</p>
            </div>
        </div>
    );
}