import { setSetting } from "../settings";

export function onImportAdventure(adventure: Adventure) {
    // If the adventure is imported, stop showing the import window on startup.
    setSetting('showImport', false);
}