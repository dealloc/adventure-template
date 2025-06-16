import CONSTANTS from '../constants';
import AdventureJournalSheet from '../journals/sheet';
import AdventureJournalTextPageSheet from '../journals/text-page';
import CustomImporter from '../importer/adventure-importer';
import {initializeMacros} from '../macros';
import {initializeTemplates} from '../templates';
import {initializeSettings} from '../settings';

export function onInitialized() {
	// @ts-ignore
	foundry.applications.apps.DocumentSheetConfig.registerSheet(JournalEntry, CONSTANTS.id, AdventureJournalSheet as any, {
		types: ['base'],
		makeDefault: false,
		canBeDefault: false,
		label: CONSTANTS.name
	});

	// @ts-ignore
	foundry.applications.apps.DocumentSheetConfig.registerSheet(JournalEntryPage, CONSTANTS.id, AdventureJournalTextPageSheet as any, {
		types: ['text'],
		makeDefault: false,
		canBeDefault: false,
		label: `${CONSTANTS.name} text`
	});

	// @ts-ignore
	foundry.applications.apps.DocumentSheetConfig.registerSheet(Adventure, CONSTANTS.id, CustomImporter as any, {
		label: `${CONSTANTS.name} importer`,
		makeDefault: false,
	});

	initializeSettings();
	initializeTemplates();
	initializeMacros();
	console.info('Loaded', CONSTANTS.id);
}
