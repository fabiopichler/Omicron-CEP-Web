import { Config } from "../config";

export const setPageTitle = (title?: string): void => {
    document.title = title ? `${title} | ${Config.appName}` : Config.appName;
}
