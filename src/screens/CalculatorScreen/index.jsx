/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 4:16:19 PM
 *  Last update: 15 Aug 2024, 9:23:41 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import ButtonWithIcon from "../../components/ButtonWithIcon";

export default function CalculatorScreen() {
    const testSync = async () => {
        if ("serviceWorker" in navigator) {
            const reg = await navigator.serviceWorker.ready;
            if (reg.sync) {
                console.log("Sync available, syncing...");
                const tags = await reg.sync.getTags();
                if (tags.includes("test-sync")) {
                    console.log("Sync already requested.");
                    return;
                }
                await reg.sync.register("test-sync");
                console.log("Test sync registered!");
            }
        }
    };

    return (
        <div className="navContainer">
            <div className="cardWithBorder">
                <p>Calculator goes here</p>
                <ButtonWithIcon
                    onClick={testSync}
                    caption="Test Sync"
                />
            </div>
        </div>
    );
}