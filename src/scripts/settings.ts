import CONSTANTS from "./constants";
import showImport from "./settings/show-import";

const settings = {
    showImport,
};

export function initializeSettings() {
    for (const key in settings) {
        console.info(CONSTANTS.id as any, key as any, settings[key]);
        game.settings.register(CONSTANTS.id as any, key as any, settings[key]);
    }
}