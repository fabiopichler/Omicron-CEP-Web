import { IDeviceConfig } from "./config-interfaces";
import { MobileApp } from "../services/MobileApp";

export default <IDeviceConfig> {
    appName: 'Omicron CEP',
    appVersion: MobileApp.getVersionName(),
    baseUrl: '',
}
