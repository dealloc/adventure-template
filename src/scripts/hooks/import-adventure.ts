import {setSetting} from "../settings";
import showImport from "../settings/show-import";

export function onImportAdventure(adventure: Adventure) {
	// If the adventure is imported, stop showing the import window on startup.
	setSetting(showImport, false);
}
