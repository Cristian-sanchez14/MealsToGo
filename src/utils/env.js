import { Platform } from "react-native";

const liveHost = "https://us-central1-mealstogoservers.cloudfunctions.net";
const localHost = "http://127.0.0.1:5001/mealstogoservers/us-central1";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = true; // switch to false to run live server "npm run serve or yarn"
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
