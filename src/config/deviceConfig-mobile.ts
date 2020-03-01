import { IDeviceConfig } from "./config-interfaces";
import { MobileApp } from "../services/MobileApp";

// eslint-disable-next-line
export default <IDeviceConfig> {
    appName: 'Omicron CEP',
    appVersion: MobileApp.getVersionName(),
    baseUrl: '',
}
