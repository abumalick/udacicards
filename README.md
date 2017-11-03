# UdaciCards: React Native project for udacity

## Presentation

This is a React Native app (Android & iOS) that allows users to study collections of flashcards. The app allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

This is a project developed for learning purpose only and is probably completely useless for real users. A lot of things need to be implemented to be a useful app.

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

## Test the app

This app have been tested with `Expo` app on a real android device and a iOS simulator. The built `apk` have been tested on a real android device.

The notifications works very well on android. But I experienced problems to set it up on iOS simulator, `Permissions.askAsync(Permissions.NOTIFICATIONS)` kept returning an `undetermined` status, even after I approved the permission. The code is in actions/notification L29.

### With Expo app:

You can test the app with Expo app by going to this url:

<https://expo.io/@abumalick/udacicards>

### With the android apk

You can also download the `.apk` file from [here](build/udacicards-1.0.0.apk)

## Build the app from this repository

- clone the repository
- install packages with `yarn` or `npm install`
- run the app with `yarn start` or `npm run start`
- scan the barcode/manually enter the url in `Expo` app on your phone or in a Android/iOS simulator

## Table of Contents

-   [Available Scripts](#available-scripts)
    -   [npm start](#npm-start)
    -   [npm test](#npm-test)
    -   [npm run ios](#npm-run-ios)
    -   [npm run android](#npm-run-android)
    -   [npm run eject](#npm-run-eject)
-   [Writing and Running Tests](#writing-and-running-tests)
-   [Environment Variables](#environment-variables)
    -   [Configuring Packager IP Address](#configuring-packager-ip-address)
-   [Customizing App Display Name and Icon](#customizing-app-display-name-and-icon)
-   [Sharing and Deployment](#sharing-and-deployment)
    -   [Publishing to Expo's React Native Community](#publishing-to-expos-react-native-community)
    -   [Building an Expo "standalone" app](#building-an-expo-standalone-app)
-   [Troubleshooting](#troubleshooting)
        \-   [Networking](#networking)
        \-   [iOS Simulator won't open](#ios-simulator-wont-open)
        \-   [QR Code does not scan](#qr-code-does-not-scan)

## Available Scripts

### `npm install`

Run `npm install` or `yarn` to install the dependencies of the app

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

    npm start -- --reset-cache
    # or
    yarn start -- --reset-cache

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### Using Android Studio's `adb`

1.  Make sure that you can run adb from your terminal.
2.  Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

##### Using Genymotion's `adb`

1.  Find Genymotion’s copy of adb. On macOS for example, this is normally `/Applications/Genymotion.app/Contents/MacOS/tools/`.
2.  Add the Genymotion tools directory to your path (instructions for [Mac](http://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/), [Linux](http://www.computerhope.com/issues/ch001647.htm), and [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)).
3.  Make sure that you can run adb from your terminal.

## Customizing App Display Name and Icon

You can edit `app.json` to include [configuration keys](https://docs.expo.io/versions/latest/guides/configuration.html) under the `expo` key.

## Writing and Running Tests

This project is set up to use [jest](https://facebook.github.io/jest/) for tests. You can configure whatever testing strategy you like, but jest works out of the box. Create test files in directories called `__tests__` or with the `.test` extension to have the files loaded by jest. See the [the template project](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/App.test.js) for an example test. The [jest documentation](https://facebook.github.io/jest/docs/getting-started.html) is also a wonderful resource, as is the [React Native testing tutorial](https://facebook.github.io/jest/docs/tutorial-react-native.html).

## Environment Variables

You can configure some of Create React Native App's behavior using environment variables.

### Configuring Packager IP Address

When starting your project, you'll see something like this for your project URL:

    exp://192.168.0.2:19000

The "manifest" at that URL tells the Expo app how to retrieve and load your app's JavaScript bundle, so even if you load it in the app via a URL like `exp://localhost:19000`, the Expo client app will still try to retrieve your app at the IP address that the start script provides.

In some cases, this is less than ideal. This might be the case if you need to run your project inside of a virtual machine and you have to access the packager via a different IP address than the one which prints by default. In order to override the IP address or hostname that is detected by Create React Native App, you can specify your own hostname via the `REACT_NATIVE_PACKAGER_HOSTNAME` environment variable:

Mac and Linux:

    REACT_NATIVE_PACKAGER_HOSTNAME='my-custom-ip-address-or-hostname' npm start

Windows:

    set REACT_NATIVE_PACKAGER_HOSTNAME='my-custom-ip-address-or-hostname'
    npm start

The above example would cause the development server to listen on `exp://my-custom-ip-address-or-hostname:19000`.

### Publishing to Expo's React Native Community

Expo provides free hosting for the JS-only apps created by CRNA, allowing you to share your app through the Expo client app. This requires registration for an Expo account.

Install the `exp` command-line tool, and run the publish command:

    $ npm i -g exp
    $ exp publish

### Building an Expo "standalone" app

You can also use a service like [Expo's standalone builds](https://docs.expo.io/versions/latest/guides/building-standalone-apps.html) if you want to get an IPA/APK for distribution without having to build the native code yourself.

## Troubleshooting

### Networking

If you're unable to load your app on your phone due to a network timeout or a refused connection, a good first step is to verify that your phone and computer are on the same network and that they can reach each other. Create React Native App needs access to ports 19000 and 19001 so ensure that your network and firewall settings allow access from your device to your computer on both of these ports.

Try opening a web browser on your phone and opening the URL that the packager script prints, replacing `exp://` with `http://`. So, for example, if underneath the QR code in your terminal you see:

    exp://192.168.0.1:19000

Try opening Safari or Chrome on your phone and loading

    http://192.168.0.1:19000

and

    http://192.168.0.1:19001

If this works, but you're still unable to load your app by scanning the QR code, please open an issue on the [Create React Native App repository](https://github.com/react-community/create-react-native-app) with details about these steps and any other error messages you may have received.

If you're not able to load the `http` URL in your phone's web browser, try using the tethering/mobile hotspot feature on your phone (beware of data usage, though), connecting your computer to that WiFi network, and restarting the packager.

### iOS Simulator won't open

If you're on a Mac, there are a few errors that users sometimes see when attempting to `npm run ios`:

-   "non-zero exit code: 107"
-   "You may need to install Xcode" but it is already installed
-   and others

There are a few steps you may want to take to troubleshoot these kinds of errors:

1.  Make sure Xcode is installed and open it to accept the license agreement if it prompts you. You can install it from the Mac App Store.
2.  Open Xcode's Preferences, the Locations tab, and make sure that the `Command Line Tools` menu option is set to something. Sometimes when the CLI tools are first installed by Homebrew this option is left blank, which can prevent Apple utilities from finding the simulator. Make sure to re-run `npm/yarn run ios` after doing so.
3.  If that doesn't work, open the Simulator, and under the app menu select `Reset Contents and Settings...`. After that has finished, quit the Simulator, and re-run `npm/yarn run ios`.

### QR Code does not scan

If you're not able to scan the QR code, make sure your phone's camera is focusing correctly, and also make sure that the contrast on the two colors in your terminal is high enough. For example, WebStorm's default themes may [not have enough contrast](https://github.com/react-community/create-react-native-app/issues/49) for terminal QR codes to be scannable with the system barcode scanners that the Expo app uses.

If this causes problems for you, you may want to try changing your terminal's color theme to have more contrast, or running Create React Native App from a different terminal. You can also manually enter the URL printed by the packager script in the Expo app's search bar to load it manually.
