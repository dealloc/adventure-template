import CONSTANTS from "./constants";
import showImport from "./settings/show-import";
import oneTimeSetup from "./settings/one-time-setup";

const settings: { [key: string]: ClientSettings.SettingConfig & { key: string } } = {
	showImport,
	oneTimeSetup
};

export function initializeSettings() {
	console.warn(settings);
	for (const key in settings) {
		const setting = settings[key];
		console.info('Registering setting', setting.key, setting);

		// @ts-ignore
		game.settings!.register(CONSTANTS.id as any, setting.key, setting);
	}
}

export function getSetting<T>(key: { key: string }): T {
	return game.settings!.get(CONSTANTS.id as any, key.key as any) as any;
}

/**
 * Sets a value for a configuration setting.
 *
 * @param key The configuration value (from the `settings` folder).
 * @param value The value to set for the configuration entry.
 */
export function setSetting<T extends ClientSettings.SettingCreateData<any, any>>(key: { key: string }, value: T) {
	game.settings!.set(CONSTANTS.id as any, key.key as any, value);
}
