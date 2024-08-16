/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 4:16:19 PM
 *  Last update: 15 Aug 2024, 11:03:56 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useSelector } from "react-redux";

import ButtonWithIcon from "../../components/ButtonWithIcon";

export default function CalculatorScreen() {
    const notificationEnabled = useSelector((state) => state.settings.deviceFeatures.notification);

    return (
        <div className="navContainer">
            <div className="cardWithBorder" style={{gap: "20px"}}>
                <p>Calculator goes here</p>
                {
                    notificationEnabled &&
                    <ButtonWithIcon
                        caption="Send a calculation complete notification"
                        onClick={() => {
                            new Notification("Calculation complete!", {
                                body: "Your crop calculation has finished.",
                                icon: "/assets/icon-highres.png",
                                badge: "/assets/icon.highres.png",
                            })
                        }}
                    />
                }
            </div>
        </div>
    );
}