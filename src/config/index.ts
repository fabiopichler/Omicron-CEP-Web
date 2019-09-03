import { MobileApp } from "../services/MobileApp";
import {
    IConfig,
    IDeviceConfig,
    IAppConfig
} from "./config-interfaces";

let deviceConfig: IDeviceConfig;
let appConfig: IAppConfig;

if (MobileApp.onMobile()) {
    deviceConfig = require('./deviceConfig-mobile').default;
} else {
    deviceConfig = require('./deviceConfig-web').default;
}

appConfig = require('./appConfig').default;

export const Config: IConfig = {
    ...deviceConfig,
    ...appConfig
};
