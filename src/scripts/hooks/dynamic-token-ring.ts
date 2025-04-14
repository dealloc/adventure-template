import TokenRingConfig from "../../node_modules/@league-of-foundry-developers/foundry-vtt-types/src/foundry/client-esm/canvas/tokens/ring-config.mjs";
import CONSTANTS from "../constants";
import { asset } from "../utilities/module-path";

export function onInitializeDynamicTokenRingConfig(ringConfig: TokenRingConfig) {
    const ringData = new foundry.canvas.tokens.DynamicRingData({
      label: `${CONSTANTS.name} Ring`,
      spritesheet: asset`/assets/spritesheets/rings.json`
    });

    (ringConfig as any).addConfig(`${CONSTANTS.id}Rings`, ringData);
}