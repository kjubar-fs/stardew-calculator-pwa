/*
 *  Author: Kaleb Jubar
 *  Created: 14 Aug 2024, 11:19:59 AM
 *  Last update: 14 Aug 2024, 1:46:33 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useDispatch, useSelector } from "react-redux";

import { setProfessionSetting } from "../../data";

import Checkbox from "../Checkbox";

import styles from "./styles.module.css";

export default function SettingsModal({ shown, onClose }) {
    const userId = useSelector((state) => state.settings.userId);
    const rancherEnabled = useSelector((state) => state.settings.professions.rancher);
    const gemologistEnabled = useSelector((state) => state.settings.professions.gemologist);
    const tillerEnabled = useSelector((state) => state.settings.professions.tiller);
    const blacksmithEnabled = useSelector((state) => state.settings.professions.blacksmith);
    const artisanEnabled = useSelector((state) => state.settings.professions.artisan);
    const fisherEnabled = useSelector((state) => state.settings.professions.fisher);
    const tapperEnabled = useSelector((state) => state.settings.professions.tapper);
    const anglerEnabled = useSelector((state) => state.settings.professions.angler);
    const dispatch = useDispatch();

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
                            setProfessionSetting(userId, "rancher", val, dispatch);
                        }}
                    />
                    <Checkbox
                        className={styles.checkbox}
                        caption="Gemologist"
                        initialValue={gemologistEnabled}
                        onChange={(val) => {
                            setProfessionSetting(userId, "gemologist", val, dispatch);
                        }}
                    />
                    <Checkbox
                        className={styles.checkbox}
                        caption="Tiller"
                        initialValue={tillerEnabled}
                        onChange={(val) => {
                            setProfessionSetting(userId, "tiller", val, dispatch);
                        }}
                    />
                    <Checkbox
                        className={styles.checkbox}
                        caption="Blacksmith"
                        initialValue={blacksmithEnabled}
                        onChange={(val) => {
                            setProfessionSetting(userId, "blacksmith", val, dispatch);
                        }}
                    />
                    <Checkbox
                        className={styles.checkbox}
                        caption="Artisan"
                        initialValue={artisanEnabled}
                        onChange={(val) => {
                            setProfessionSetting(userId, "artisan", val, dispatch);
                        }}
                    />
                    <Checkbox
                        className={styles.checkbox}
                        caption="Fisher"
                        initialValue={fisherEnabled}
                        onChange={(val) => {
                            setProfessionSetting(userId, "fisher", val, dispatch);
                        }}
                    />
                    <Checkbox
                        className={styles.checkbox}
                        caption="Tapper"
                        initialValue={tapperEnabled}
                        onChange={(val) => {
                            setProfessionSetting(userId, "tapper", val, dispatch);
                        }}
                    />
                    <Checkbox
                        className={styles.checkbox}
                        caption="Angler"
                        initialValue={anglerEnabled}
                        onChange={(val) => {
                            setProfessionSetting(userId, "angler", val, dispatch);
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