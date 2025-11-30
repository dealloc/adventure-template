import { asset } from "../utilities/module";

/** Called when Foundry is gathering dynamic token ring configuration options. */
export function onInitializeDynamicTokenRingConfig(
	ringConfig: TokenRingConfig,
) {
	const ringData = new (
		foundry.canvas.placeables.tokens.DynamicRingData as any
	)({
		label: `${MODULE_NAME} Ring`,
		spritesheet: asset("/assets/spritesheets/rings.json"),
	});

	(ringConfig as any).addConfig(`${MODULE_ID}Rings`, ringData);
}
