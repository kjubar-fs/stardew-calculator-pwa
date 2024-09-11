/*
 *  Author: Kaleb Jubar
 *  Created: 14 Aug 2024, 12:37:36 PM
 *  Last update: 15 Aug 2024, 12:37:26 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
export const userId = "TDIuTPOwRYiYKU0XCn9S";

// background sync tags
export const settingsSyncTag = "svc-sync-settings";

// message definitions
export const messageTypes = Object.freeze({
    refreshData: 0,
});

export class ClientMessage {
    constructor(type, source) {
        this.type = type;
        this.source = source;
    }
}