import { initializeMacros } from "../macros";
import { initializeSettings } from "../settings";
import { CustomAdventureImporter } from "../sheets/importer";
import CustomJournalSheet from "../sheets/journal";
import CustomJournalTextPageSheet from "../sheets/text-page";
import { initializeTemplates } from "../templates";
import { info } from "../utilities/logging";

// Called on `init` hook.
export function onInit() {
	registerJournalSheets();

	initializeTemplates();
	initializeSettings();
	initializeMacros();

	info("initialization complete");
}

// Registers our custom journal sheet types.
function registerJournalSheets() {
	foundry.applications.apps.DocumentSheetConfig.registerSheet(
		JournalEntry,
		MODULE_ID,
		CustomJournalSheet as any,
		{
			types: ["base"],
			makeDefault: false,
			canBeDefault: false,
			label: `${MODULE_NAME} Journal`,
		},
	);

	foundry.applications.apps.DocumentSheetConfig.registerSheet(
		JournalEntryPage,
		MODULE_ID,
		CustomJournalTextPageSheet as any,
		{
			types: ["text"],
			makeDefault: false,
			canBeDefault: false,
			label: `${MODULE_NAME} Text`,
		},
	);
	foundry.applications.apps.DocumentSheetConfig.registerSheet(
		Adventure,
		MODULE_ID,
		CustomAdventureImporter as any,
		{
			label: `${MODULE_ID} importer`,
			makeDefault: false,
		},
	);
}
