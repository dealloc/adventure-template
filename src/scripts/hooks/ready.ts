import CONSTANTS from "../constants";
import { getSetting } from "../settings";

export async function onReady() {
    const pack = game.packs.get(`${CONSTANTS.id}.${CONSTANTS.adventure}`);

    if (getSetting<boolean>('showImport') !== false) {
        if (pack === undefined) {
            ui.notifications.warn(`Could not render adventures from ${CONSTANTS.id}.${CONSTANTS.adventure}`);

            return;
        }

        for (const adventure of await pack.getDocuments()) {
            adventure.sheet.render(true);
        }
    }
}