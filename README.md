# stardew-calculator-pwa
This is a PWA version of the Stardew Valley Calculator app, designed and written for INFO-6128 by Kaleb Jubar.

Currently, the app includes a basic crop and product browser, user settings for profession-related toggles, and some extra basic features to demonstrate some PWA APIs.

## Installation and Testing
This app was created with Node, Vite, and ReactJS. As such, it will require installing the requisite libraries to run. Execute `npm install` in the project directory to download the required libraries.

To test the app, use `npm run dev` from the command line and open the provided URL in your browser (should be `localhost:XXXX`).

### Testing on a Physical Device
Testing can be done on a physical device by starting the server using `npm run dev -- --host`, which opens a port on your local network that can be connected to. In particular, this allows using the vibration setting in this app.

However, because the app is served over HTTP from Vite, and because self-signing an SSL Cert to serve with HTTPS in a way that a phone will allow connection is time-consuming and costly, testing PWA-specific features on a physical device is more complicated.

I do not have a physical iOS device to test with, but I was able to test successfully on an Android phone. This requires a few steps:
1. Enable developer mode in the phone settings.
2. In the developer settings, enable USB debugging.
3. Plug the phone into your computer with a USB cable.
4. Open `chrome://inspect/#devices` in your browser (assuming you're using Chrome or a Chromium-based browser).
5. Follow [these steps](https://developer.chrome.com/docs/devtools/remote-debugging/local-server#usb-port-forwarding) to set up port forwarding from your browser to your phone. Use the port that Vite runs on.
6. Open the `localhost` page in your phone's browser.

The app should now be running from your computer in your phone's browser, recognize the manifest, install the service worker, and allow installing the app to your phone.

## API Features
To satisfy the requirements of the project, the app contains a few sample features that demonstrate some PWA APIs in a way that is somewhat related to the content of the app. These setting options *do not* persist between refreshes or when reopening the app, as they are just stored in local state for demonstration purposes.

1. Vibration on navigate
    - When enabled, this uses the Vibration API to give the device a light vibrate when navigating between bottom tabs in the app.
2. Calculation notifications
    - After allowing notifications in the browser and enabling the setting, this will add a button to the Calculator screen that sends a notification via the service worker. This is a representation of sending the user a notification when a long-running calculation finishes.
3. Fullscreen mode
    - Enabling this will cause the app to run in fullscreen mode until disabled or manually exited.