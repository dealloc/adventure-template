export default class AdventureJournalSheet extends foundry.applications.sheets.journal.JournalEntrySheet {
    static DEFAULT_OPTIONS = foundry.utils.mergeObject(foundry.applications.sheets.journal.JournalEntrySheet.DEFAULT_OPTIONS, {
        classes: [
            ...foundry.applications.sheets.journal.JournalEntrySheet.DEFAULT_OPTIONS.classes,
            'adventure-template'
        ]
    });
}