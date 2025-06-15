import {getSetting, setSetting} from "../settings";
import oneTimeSetup from "../settings/one-time-setup";

export function onFirstTimeSetup() {
    const isFirstTimeSetup = getSetting<boolean>(oneTimeSetup);

    if (!isFirstTimeSetup) {
        return;
    }

    setSetting<boolean>(oneTimeSetup, false);
    console.info('Performing first time setup');
    // This is where you can initialize settings / logic that runs only the first time after installing the package.
}
