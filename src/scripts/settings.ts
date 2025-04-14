import CONSTANTS from "./constants";
import showImport from "./settings/show-import";

const settings = {
    showImport,
};

export function initializeSettings() {
    for (const key in settings) {
        game.settings.register(CONSTANTS.id as any, key as any, settings[key]);
    }
}

export function getSetting<T>(name: string): T {
    return game.settings.get(CONSTANTS.id as any, name as any) as any;
}

export function setSetting<T>(key: string, value: T) {
    game.settings.set(CONSTANTS.id as any, key as any, value);
}