export default {
	key: "oneTimeSetup",
	name: "One Time Setup",
	hint: "Whether the one time setup has executed, set to false to trigger again.",
	scope: "world",
	type: Boolean as any,
	default: true,
	config: import.meta.env.DEV,
	requiresReload: false,
} as ClientSettings.SettingConfig & { key: string };
