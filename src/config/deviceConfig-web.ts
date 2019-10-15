import { IDeviceConfig } from "./config-interfaces";

export default <IDeviceConfig> {
    appName: 'Omicron CEP Web',
    appVersion: process.env.REACT_APP_VERSION,
    baseUrl: process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '',
}
