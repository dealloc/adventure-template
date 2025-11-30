export default class CustomJournalSheet extends foundry.applications.sheets
	.journal.JournalEntrySheet {
	static DEFAULT_OPTIONS = {
		...foundry.applications.sheets.journal.JournalEntrySheet.DEFAULT_OPTIONS,
		classes: [
			...foundry.applications.sheets.journal.JournalEntrySheet.DEFAULT_OPTIONS
				.classes,
			MODULE_ID,
		],
	};
}
