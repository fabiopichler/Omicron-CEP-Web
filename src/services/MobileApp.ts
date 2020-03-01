
const mobileApp = (window as any).Android_MobileApp;
const onMobile: boolean = !!mobileApp;

export class MobileApp {

    public static onMobile(): boolean {
        return onMobile;
    }

    public static getVersionName(): string {
        if (onMobile)
            return mobileApp.getVersionName();

        return '';
    }

    public static closeApp(): void {
        if (onMobile)
            mobileApp.closeApp();
    }

    public static openDrawer(): void {
        if (onMobile)
            mobileApp.openDrawer();
    }
}
