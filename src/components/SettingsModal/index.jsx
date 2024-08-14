/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 12:27:33 PM
 *  Last update: 14 Aug 2024, 10:31:29 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useState } from "react";

// import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// import { useDispatch, useSelector } from "react-redux";

// import { setProfessionSetting } from "../../data";

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
                    <div className={styles.checkbox}>
                        <input
                            id="settingRancher"
                            name="settingRancher"
                            type="checkbox"
                            value={rancherEnabled}
                            onClick={(cb) => {
                                // setProfessionSetting(userId, "rancher", !rancherEnabled, dispatch);
                                console.log("Rancher changed", cb.target.checked);
                                setRancherEnabled(cb.target.checked);
                            }}
                        />
                        <label htmlFor="settingRancher">Rancher</label>
                    </div>
                    <div className={styles.checkbox}>
                        <input
                            id="settingGemologist"
                            name="settingGemologist"
                            type="checkbox"
                            value={gemologistEnabled}
                            onClick={(cb) => {
                                // setProfessionSetting(userId, "gemologist", !gemologistEnabled, dispatch);
                                console.log("Gemologist changed", cb.target.checked);
                                setGemologistEnabled(cb.target.checked);
                            }}
                        />
                        <label htmlFor="settingGemologist">Gemologist</label>
                    </div>
                    <div className={styles.checkbox}>
                        <input
                            id="settingTiller"
                            name="settingTiller"
                            type="checkbox"
                            value={tillerEnabled}
                            onClick={(cb) => {
                                // setProfessionSetting(userId, "tiller", !tillerEnabled, dispatch);
                                console.log("Tiller changed", cb.target.checked);
                                setTillerEnabled(cb.target.checked);
                            }}
                        />
                        <label htmlFor="settingTiller">Tiller</label>
                    </div>
                    <div className={styles.checkbox}>
                        <input
                            id="settingBlacksmith"
                            name="settingBlacksmith"
                            type="checkbox"
                            value={blacksmithEnabled}
                            onClick={(cb) => {
                                // setProfessionSetting(userId, "blacksmith", !blacksmithEnabled, dispatch);
                                console.log("Blacksmith changed", cb.target.checked);
                                setBlacksmithEnabled(cb.target.checked);
                            }}
                        />
                        <label htmlFor="settingBlacksmith">Blacksmith</label>
                    </div>
                    <div className={styles.checkbox}>
                        <input
                            id="settingArtisan"
                            name="settingArtisan"
                            type="checkbox"
                            value={artisanEnabled}
                            onChange={(cb) => {
                                // setProfessionSetting(userId, "artisan", !artisanEnabled, dispatch);
                                console.log("Artisan changed", cb.target.checked);
                                setArtisanEnabled(cb.target.checked);
                            }}
                        />
                        <label htmlFor="settingArtisan">Artisan</label>
                    </div>
                    <div className={styles.checkbox}>
                        <input
                            id="settingFisher"
                            name="settingFisher"
                            type="checkbox"
                            value={fisherEnabled}
                            onClick={(cb) => {
                                // setProfessionSetting(userId, "fisher", !fisherEnabled, dispatch);
                                console.log("Fisher changed", cb.target.checked);
                                setFisherEnabled(cb.target.checked);
                            }}
                        />
                        <label htmlFor="settingFisher">Artisan</label>
                    </div>
                    <div className={styles.checkbox}>
                        <input
                            id="settingTapper"
                            name="settingTapper"
                            type="checkbox"
                            value={tapperEnabled}
                            onClick={(cb) => {
                                // setProfessionSetting(userId, "tapper", !tapperEnabled, dispatch);
                                console.log("Tapper changed", cb.target.checked);
                                setTapperEnabled(cb.target.checked);
                            }}
                        />
                        <label htmlFor="settingTapper">Artisan</label>
                    </div>
                    <div className={styles.checkbox}>
                        <input
                            id="settingAngler"
                            name="settingAngler"
                            type="checkbox"
                            value={anglerEnabled}
                            onClick={(cb) => {
                                // setProfessionSetting(userId, "angler", !anglerEnabled, dispatch);
                                console.log("Angler changed", cb.target.checked);
                                setAnglerEnabled(cb.target.checked);
                            }}
                        />
                        <label htmlFor="settingAngler">Angler</label>
                    </div>
                </div>

                <button
                    className={styles.close}
                    onClick={onClose}
                    // underlayColor="#FFE395"
                >
                    {/* <MaterialIcons name="close" size={24} color="#C00" /> */}
                    X
                </button>
            </div>
        </div>
    );
}