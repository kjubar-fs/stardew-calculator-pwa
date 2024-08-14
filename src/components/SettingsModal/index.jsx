/*
 *  Author: Kaleb Jubar
 *  Created: 14 Aug 2024, 11:19:59 AM
 *  Last update: 14 Aug 2024, 12:24:46 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useState } from "react";

// import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// import { useDispatch, useSelector } from "react-redux";

// import { setProfessionSetting } from "../../data";

import Checkbox from "../Checkbox";

import styles from "./styles.module.css";

export default function SettingsModal({ shown, onClose }) {
    // TODO: add state/db
    // const userId = useSelector((state) => state.settings.userId);
    // const rancherEnabled = useSelector((state) => state.settings.professions.rancher);
    // const gemologistEnabled = useSelector((state) => state.settings.professions.gemologist);
    // const tillerEnabled = useSelector((state) => state.settings.professions.tiller);
    // const blacksmithEnabled = useSelector((state) => state.settings.professions.blacksmith);
    // const artisanEnabled = useSelector((state) => state.settings.professions.artisan);
    // const fisherEnabled = useSelector((state) => state.settings.professions.fisher);
    // const tapperEnabled = useSelector((state) => state.settings.professions.tapper);
    // const anglerEnabled = useSelector((state) => state.settings.professions.angler);
    const [rancherEnabled, setRancherEnabled] = useState(false);
    const [gemologistEnabled, setGemologistEnabled] = useState(false);
    const [tillerEnabled, setTillerEnabled] = useState(false);
    const [blacksmithEnabled, setBlacksmithEnabled] = useState(false);
    const [artisanEnabled, setArtisanEnabled] = useState(false);
    const [fisherEnabled, setFisherEnabled] = useState(false);
    const [tapperEnabled, setTapperEnabled] = useState(false);
    const [anglerEnabled, setAnglerEnabled] = useState(false);
    // const dispatch = useDispatch();

    return (
        <div
            className={`navContainer ${styles.modalBlur}`}
            style={{ display: shown ? "flex" : "none" }}
        >
            <div className={`cardWithBorder ${styles.container}`}>
                <h1>Settings</h1>

                <h2>Professions</h2>
                <div className={styles.checkboxGrid}>
                    <Checkbox
                        className={styles.checkbox}
                        caption="Rancher"
                        initialValue={rancherEnabled}
                        onChange={(val) => {
                            // setProfessionSetting(userId, "rancher", !rancherEnabled, dispatch);
                        }}
                    />
                    <Checkbox
                        className={styles.checkbox}
                        caption="Gemologist"
                        initialValue={gemologistEnabled}
                        onChange={() => {
                            // setProfessionSetting(userId, "gemologist", !gemologistEnabled, dispatch);
                        }}
                    />
                    <Checkbox
                        className={styles.checkbox}
                        caption="Tiller"
                        initialValue={tillerEnabled}
                        onChange={() => {
                            // setProfessionSetting(userId, "tiller", !tillerEnabled, dispatch);
                        }}
                    />
                    <Checkbox
                        className={styles.checkbox}
                        caption="Blacksmith"
                        initialValue={blacksmithEnabled}
                        onChange={() => {
                            // setProfessionSetting(userId, "blacksmith", !blacksmithEnabled, dispatch);
                        }}
                    />
                    <Checkbox
                        className={styles.checkbox}
                        caption="Artisan"
                        initialValue={artisanEnabled}
                        onChange={() => {
                            // setProfessionSetting(userId, "artisan", !artisanEnabled, dispatch);
                        }}
                    />
                    <Checkbox
                        className={styles.checkbox}
                        caption="Fisher"
                        initialValue={fisherEnabled}
                        onChange={() => {
                            // setProfessionSetting(userId, "fisher", !fisherEnabled, dispatch);
                        }}
                    />
                    <Checkbox
                        className={styles.checkbox}
                        caption="Tapper"
                        initialValue={tapperEnabled}
                        onChange={() => {
                            // setProfessionSetting(userId, "tapper", !tapperEnabled, dispatch);
                        }}
                    />
                    <Checkbox
                        className={styles.checkbox}
                        caption="Angler"
                        initialValue={anglerEnabled}
                        onChange={() => {
                            // setProfessionSetting(userId, "angler", !anglerEnabled, dispatch);
                        }}
                    />
                </div>

                <button
                    className={styles.close}
                    onClick={onClose}
                >
                </button>
            </div>
        </div>
    );
}