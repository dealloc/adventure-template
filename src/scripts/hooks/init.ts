import CONSTANTS from '../constants';
import AdventureJournalSheet from '../journals/sheet';
import AdventureJournalTextPageSheet from '../journals/text-page';
import CustomImporter from '../importer/adventure-importer';
import { initializeMacros } from '../macros';
import { initializeTemplates } from '../templates';
import { initializeSettings } from '../settings';

export function onInitialized() {
    DocumentSheetConfig.registerSheet(JournalEntry, CONSTANTS.id, AdventureJournalSheet, {
        types: ['base'],
        makeDefault: false,
        canBeDefault: false,
        label: CONSTANTS.name
    });

    DocumentSheetConfig.registerSheet(JournalEntryPage, CONSTANTS.id, AdventureJournalTextPageSheet, {
        types: ['text'],
        makeDefault: false,
        canBeDefault: false,
        label: `${CONSTANTS.name} text`
    });

    DocumentSheetConfig.registerSheet(Adventure, CONSTANTS.id, CustomImporter, {
        label: `${CONSTANTS.name} importer`,
        makeDefault: false,
    });

    initializeSettings();
    initializeTemplates();
    initializeMacros();
    console.info('Loaded', CONSTANTS.id);
}