/*
 *  Author: Kaleb Jubar
 *  Created: 15 Aug 2024, 8:57:42 AM
 *  Last update: 15 Aug 2024, 12:18:14 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { getAllSettings } from "./src/data/local/read";
import { deleteProfession } from "./src/data/local/write";
import { setProfessionActive } from "./src/data/firebase/write";

// most of this code comes from my PWA labs, so it is still original but
// not written fresh for this project
const version = "1"
const cacheName = `cacheAssets-v${version}`;

/**
 * On Install event.
 * Builds the static cache.
 */
self.addEventListener("install", (event) => {
    // skip waiting for other tabs to be closed
    self.skipWaiting();

    // generate the static cache
    // wait until we store everything in the cache before activating
    event.waitUntil(
        caches.open(cacheName)
            .then((cache) => {
                cache.addAll([
                    // HTML
                    "/",
                    "/index.html",
                    
                    // App base components and CSS
                    "/src/main.jsx",
                    "/src/index.css",
                    "/src/App.jsx",
                    
                    // PWA manifest
                    "/manifest.json",
                ]);
            })
    );
});

/**
 * On Activate event.
 * Claims open pages for the current worker and deletes old caches.
 */
self.addEventListener("activate", (event) => {
    // claim all uncontrolled open pages
    event.waitUntil(clients.claim());

    // delete any old caches if the version updates
    event.waitUntil(caches.keys().then((cacheNames) => {
        return Promise.all(
            // filter down to all caches but the current version
            cacheNames.filter(item => item !== cacheName)
                // and then delete them
                .map(item => caches.delete(item))
        );
    }));
});

/**
 * On Fetch event.
 * Triggered when the service worker retrieves an asset.
 */
self.addEventListener("fetch", (event) => {
    // TODO: switch back to Stale While Revalidate
    // temporarily using network only so I don't have to refresh a bunch
    event.respondWith(fetch(event.request));

    // this code uses cache strategy: Stale While Revalidate
    
    // only cache things from URLs starting with http
    // this makes us not attempt to cache things like chrome extensions,
    // react devtools, etc.
    // if (event.request.url.startsWith("http") && event.request.method === "GET") {
    //     // a variant of the code given in the demo video using an async IIFE
    //     // and await instead of .then().catch()
    //     event.respondWith((async () => {
    //         // get the cache and response from the cache
    //         const cache = await caches.open(cacheName);
    //         // cache.match() can return undefined so we don't need a .catch() to handle match failing
    //         const cachedResp = await cache.match(event.request);

    //         // check for an updated version of the page
    //         // need a .catch() to return undefined in the event the fetch fails
    //         // this will only explicitly fail if the user is offline
    //         // non-success HTTP responses (like 404, 500) still return a response object
    //         // if we needed to handle other HTTP responses,
    //         // we'd need to check that first before storing in the cache
    //         let fetchedResp = await fetch(event.request).catch(() => undefined);
    //         // if we got a response, clone it (so it doesn't disappear) and cache it
    //         if (fetchedResp) {
    //             cache.put(event.request, fetchedResp.clone());
    //         }
    //         // if we had an offline page, we could return that from the static cache
    //         // here if the fetch fails

    //         // if we had a cached copy of the resource, return it
    //         // otherwise return whatever we fetched
    //         return cachedResp || fetchedResp;
    //     })());
    // } else {
    //     event.respondWith(fetch(event.request));
    // }
});

/**
 * On Background Sync event.
 * Triggered when we come online after the client requests a sync.
 */
self.addEventListener("sync", (event) => {
    console.log("Sync received:", event);

    // TODO: update tag and make global
    // check the tag
    if (event.tag === "test-sync") {
        // run an async IIFE so we can await for IDB and Firebase operations
        (async () => {
            console.log("In async IIFE");

            // get the settings to update
            const settings = await getAllSettings();
            console.log("Settings to update:", settings);

            // save each setting to the database
            for (const setting of settings) {
                console.log("Updating setting:", setting);
                // try updating in Firebase
                const { id, userId, profession, value } = setting;
                const success = await setProfessionActive(userId, profession, value);

                // if successful, delete from IDB
                if (success) {
                    try {
                        await deleteProfession(id);
                    } catch (err) {
                        // TODO: handle error better
                        console.log(`Failed to delete ${id} from IDB:`, err);
                    }
                } else {
                    // TODO: handle error better
                    console.log(`Failed to update ${id} in Firebase, continuing...`);
                }
            }
        })();
    }
});