# Hydroponic Garden Monitor

A React Native (Expo) mobile app for monitoring a hydroponic garden. It lists the plants you're growing and shows each plant's pH, humidity and temperature. For the lettuce, those readings are pulled live from an Arduino-based sensor node over WiFi.

## Features

- **Home screen:** a "Monitor your hydroponic garden" landing page with a button for each plant (Lettuce, Kale, Chard)
- **Plant details:** pH, humidity and temperature for the selected plant
- **Live sensor data:** for Lettuce, the app fetches `/data` from the sensor device every 5 seconds and updates the readings. Kale and Chard currently show placeholder values.

## Tech stack

- [Expo](https://expo.dev/) 52 with [Expo Router](https://docs.expo.dev/router/introduction/) for file-based navigation
- React Native 0.76 and React 18
- `react-native-dotenv` for optional `.env` values

## Project structure

```
app/            screens (home, details, PlantList, PlantDetails) and the router layout
components/     UI pieces (home, plant detail and shared header components)
constants/      theme, colours and image references
assets/         fonts and plant images
utils/          helpers
```

## Getting started

Requires Node.js and the Expo tooling.

```bash
npm install
npx expo start
```

Then press `i` for the iOS simulator, `a` for an Android emulator, or `w` for web, or scan the QR code with the Expo Go app on your phone.

## Connecting the sensor

The sensor node is expected to serve JSON at `/data` containing at least `pH`, `humidity` and `temperature`, for example:

```json
{ "pH": 6.1, "humidity": 62, "temperature": 21.5 }
```

The device's address is hard-coded in `app/details.js` (currently `http://192.168.2.139/data`). Change it to your device's IP address, and make sure your phone is on the same WiFi network.
