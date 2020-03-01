
export interface IConfig {
    readonly appName: string;
    readonly appVersion: string;
    readonly baseUrl: string;
    readonly historySize: number;
}

export const Config: IConfig = {
    appName: 'Omicron CEP Web',
    appVersion: process.env.REACT_APP_VERSION as string,
    baseUrl: process.env.PUBLIC_URL,
    historySize: 20,
};
