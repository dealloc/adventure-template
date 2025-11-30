import oneTimeSetup from "./settings/one-time-setup";
import { debug } from "./utilities/logging";

const settings: {
	[key: string]: ClientSettings.SettingConfig & { key: string };
} = {
	oneTimeSetup,
};

// Should be called on `init` hook, automatically registers all settings.
export function initializeSettings() {
	for (const key in settings) {
		const setting = settings[key];
		debug("Registering setting", setting.key, setting);

		(game as any).settings?.register(MODULE_ID as any, setting.key, setting);
	}
}

/**
 * Gets a value for a configuration setting.
 *
 * @param key
 */
export function getSetting<T>(key: { key: string }): T {
	return (game as any).settings.get(MODULE_ID as any, key.key as any) as any;
}

/**
 * Sets a value for a configuration setting.
 *
 * @param key The configuration value (from the `settings` folder).
 * @param value The value to set for the configuration entry.
 */
export function setSetting<
	T extends ClientSettings.SettingCreateData<any, any>,
>(key: { key: string }, value: T) {
	(game as any).settings?.set(MODULE_ID as any, key.key as any, value);
}
