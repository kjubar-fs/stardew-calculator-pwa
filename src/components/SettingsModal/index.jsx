/*
 *  Author: Kaleb Jubar
 *  Created: 14 Aug 2024, 11:19:59 AM
 *  Last update: 16 Aug 2024, 12:18:44 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useDispatch, useSelector } from "react-redux";
import { setVibration, setNotification, setFullscreen } from "../../data/state/settingsSlice";

import { setProfessionSetting } from "../../data";

import Checkbox from "../Checkbox";
import ButtonWithIcon from "../ButtonWithIcon";

import styles from "./styles.module.css";
import { useState } from "react";

export default function SettingsModal({ onClose }) {
    const userId = useSelector((state) => state.settings.userId);
    const rancherEnabled = useSelector((state) => state.settings.professions.rancher);
    const gemologistEnabled = useSelector((state) => state.settings.professions.gemologist);
    const tillerEnabled = useSelector((state) => state.settings.professions.tiller);
    const blacksmithEnabled = useSelector((state) => state.settings.professions.blacksmith);
    const artisanEnabled = useSelector((state) => state.settings.professions.artisan);
    const fisherEnabled = useSelector((state) => state.settings.professions.fisher);
    const tapperEnabled = useSelector((state) => state.settings.professions.tapper);
    const anglerEnabled = useSelector((state) => state.settings.professions.angler);
    const vibrationEnabled = useSelector((state) => state.settings.deviceFeatures.vibration);
    const notificationEnabled = useSelector((state) => state.settings.deviceFeatures.notification);
    const fullscreenEnabled = useSelector((state) => state.settings.deviceFeatures.fullscreen);
    const dispatch = useDispatch();

    let initNotifPerm = "denied";
    if ("Notification" in window) {
        initNotifPerm = Notification.permission;
    }
    const [notifPerm, setNotifPerm] = useState(initNotifPerm);

    /**
     * Get an element to display for the notification setting.
     * @returns an element based on notification permissions
     */
    const getNotifSettingDisplay = () => {
        switch (notifPerm) {
            case "default":
                return (
                    <>
                        <p>Allow this website to send notifications to use this setting.</p>
                        <ButtonWithIcon
                            caption="Allow sending notifications"
                            onClick={async () => {
                                const perm = await Notification.requestPermission();
                                setNotifPerm(perm);
                            }}
                        />
                    </>
                );
            
            case "granted":
                return (
                    <Checkbox
                        caption="Enable calculation notifications"
                        initialValue={notificationEnabled}
                        onChange={async (val) => {
                            dispatch(setNotification(val));
                        }}
                    />
                );
            
            case "denied":
                return <p>Notifications are disabled for this website. Change your browser settings to use this feature.</p>;
        }
    };

    return (
        <div
            className={`navContainer ${styles.modalBlur}`}
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

                <h2>Device Features</h2>
                <p className={styles.smallText}>
                    These settings are simplified versions of potential options in the finished app.
                    They are here primarily to demonstrate my ability to use PWA APIs,
                    and are therefore not saved to the database and do not persist between refreshes.
                </p>

                <h3>Vibration</h3>
                <Checkbox
                    caption="Enable vibration on navigate"
                    initialValue={vibrationEnabled}
                    onChange={(val) => {
                        dispatch(setVibration(val));
                    }}
                />

                <h3>Notifications</h3>
                {getNotifSettingDisplay()}

                <h3>Fullscreen</h3>
                <Checkbox
                    caption="Use app in fullscreen mode"
                    initialValue={fullscreenEnabled}
                    onChange={(val) => {
                        dispatch(setFullscreen(val));
                        if (val) {
                            // request fullscreen if not in fullscreen already
                            if (!document.fullscreenElement) {
                                document.documentElement.requestFullscreen();
                            }
                        } else {
                            // exit fullscreen if in fullscreen still
                            // (i.e. it hasn't been exited manually by the user)
                            if (document.exitFullscreen) {
                                document.exitFullscreen();
                            }
                        }
                    }}
                />

                <button
                    className={styles.close}
                    onClick={onClose}
                >
                </button>
            </div>
        </div>
    );
}