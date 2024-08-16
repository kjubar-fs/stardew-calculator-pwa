/*
 *  Author: Kaleb Jubar
 *  Created: 16 Aug 2024, 9:34:05 AM
 *  Last update: 16 Aug 2024, 9:53:11 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useState } from "react";

export default function StackNav({ screens }) {
    // validate props
    if (!screens || screens.length === 0) {
        throw new Error("Error creating StackNav: screens must be provided and have at least one screen.");
    }

    const [activeScreens, setActiveScreens] = useState([screens[0]]);

    const getCurrentScreen = () => {
        return activeScreens[activeScreens.length - 1];
    };

    return (
        <div>Nav goes here</div>
    );
}

export class NavScreen {
    options;

    constructor (component, name) {
        this.component = component;
        this.name = name;
    }
}

export class NavScreenOptions {
    hideHeader;
    displayTitle;
}