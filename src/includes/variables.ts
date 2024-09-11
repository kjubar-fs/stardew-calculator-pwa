/*
 *  Author: Kaleb Jubar
 *  Created: 14 Aug 2024, 12:37:36 PM
 *  Last update: 11 Sep 2024, 7:20:35 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
export const userId = "TDIuTPOwRYiYKU0XCn9S";

// background sync tags
export const settingsSyncTag = "svc-sync-settings";

// message definitions
export enum MessageType {
    RefreshData = 0,
}

export class ClientMessage {
    type: MessageType;
    source: string;

    constructor(type: MessageType, source: string) {
        this.type = type;
        this.source = source;
    }
}