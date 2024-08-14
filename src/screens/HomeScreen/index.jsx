/*
 *  Author: Kaleb Jubar
 *  Created: 12 Aug 2024, 4:06:12 PM
 *  Last update: 12 Aug 2024, 6:40:37 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import ButtonWithIcon from "../../components/ButtonWithIcon";

import styles from "./styles.module.css";

export default function HomeScreen() {
    // const [showSettings, setShowSettings] = useState(false);

    // const toggleSettingsModal = () => {
    //     setShowSettings(!showSettings);
    // };

    return (
        <div
            className={`navContainer ${styles.outerContainer}`}
        >
            <div className={styles.topContainer}>
                <div className={styles.titleContainer}>
                    <img
                        src="../../../public/assets/logo.png"
                        className={styles.logo}
                    />
                    <p className={styles.subtitle}>Calculator</p>
                </div>

                <div className={`cardWithBorder ${styles.introContainer}`}>
                    <h1 className={`${styles.introText}`}>
                        Welcome!
                    </h1>
                    <div className={styles.introBodyContainer}>
                        <p className={styles.introText}>
                            This tool is a revenue calculator for Stardew Valley.
                        </p>
                        <p className={styles.introText}>
                            Get started by heading to the items tab and select some items to add to the calculator.
                        </p>
                        <p className={styles.introText}>
                            Then, switch to the calculator tab and modify the quantities to see your revenue totals, broken down by day and season!
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.bottomContainer}>
                <ButtonWithIcon
                    // onClick={toggleSettingsModal}
                    caption="Settings"
                    iconSize={32}
                    src="../../../public/assets/icon.png"
                />
            </div>

            {/* <SettingsModal shown={showSettings} onClose={toggleSettingsModal} /> */}
        </div>
    );
}