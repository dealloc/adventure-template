import CONSTANTS from "../constants";
import {getSetting} from "../settings";

export async function onReady() {
	if (CONSTANTS.adventure === null) {
		console.warn(`Adventure Template: No adventure compendium specified in constants.ts. Please set CONSTANTS.adventure to the ID of your adventure compendium.`);
		return;
	}

	const pack = game.packs.get(`${CONSTANTS.id}.${CONSTANTS.adventure}`);

	if (getSetting<boolean | undefined>('showImport') !== false) {
		if (pack === undefined) {
			ui.notifications.warn(`Could not render adventures from ${CONSTANTS.id}.${CONSTANTS.adventure}`);

			return;
		}

		for (const adventure of await pack.getDocuments()) {
			adventure.sheet.render(true);
		}
	}
}
