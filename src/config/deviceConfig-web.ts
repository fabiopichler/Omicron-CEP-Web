import { IDeviceConfig } from "./config-interfaces";

export default <IDeviceConfig> {
    appName: 'Omicron CEP Web',
    baseUrl: process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '',
}
