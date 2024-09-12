/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 4:16:19 PM
 *  Last update: 12 Sep 2024, 12:17:01 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useSelector } from "react-redux";
import { RootState } from "../../data/state/store";

import ButtonWithIcon from "../../components/ButtonWithIcon";

export default function CalculatorScreen() {
    const notificationEnabled = useSelector((state: RootState) => state.settings.deviceFeatures.notification);

    return (
        <div className="navContainer">
            <div className="cardWithBorder" style={{gap: "20px"}}>
                <p>Calculator goes here</p>
                {
                    notificationEnabled &&
                    <ButtonWithIcon
                        caption="Send a calculation complete notification"
                        onClick={async () => {
                            if ("serviceWorker" in navigator) {
                                const reg = await navigator.serviceWorker.ready;
                                reg.showNotification("Calculation complete!", {
                                    body: "Your crop calculation has finished.",
                                    icon: "/assets/icon-highres.png",
                                    badge: "/assets/icon.highres.png",
                                });
                            }
                        }}
                    />
                }
            </div>
        </div>
    );
}