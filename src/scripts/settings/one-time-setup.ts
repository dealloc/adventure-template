export default {
	key: 'oneTimeSetup',
	name: 'One Time Setup',
	hint: 'One Time Setup',
	scope: 'world',
	type: Boolean as any,
	default: true,
	config: process.env.NODE_ENV,
	requiresReload: false,
} as ClientSettings.SettingConfig & { key: string };
