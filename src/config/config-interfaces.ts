
export interface IDeviceConfig {
    readonly appName: string;
    readonly baseUrl: string;
}

export interface IAppConfig {
    readonly historySize: number;
}

export interface IConfig extends IDeviceConfig, IAppConfig {}
