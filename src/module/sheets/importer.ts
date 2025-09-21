import { asset } from "../utilities/module";

export class CustomAdventureImporter extends foundry.applications.sheets
	.AdventureImporterV2 {
	static DEFAULT_OPTIONS = {
		...foundry.applications.sheets.AdventureImporterV2.DEFAULT_OPTIONS,
		classes: [
			...foundry.applications.sheets.AdventureImporterV2.DEFAULT_OPTIONS
				.classes,
			MODULE_ID,
		],
	};

	constructor(options: any, ...args: any[]) {
		super(options, ...args);

		// Overrides the adventure's hooks and redirect them through this class.
		// ALWAYS call the 'old' parameter in the methods below or the import WILL break.
		const { document: adventure } = options;
		adventure.prepareImport = this.#prepareImport.bind(
			this,
			adventure.prepareImport.bind(adventure),
		);
		adventure.import = this.#import.bind(
			this,
			adventure.import.bind(adventure),
		);
		adventure.importContent = this.#importContent.bind(
			this,
			adventure.importContent.bind(adventure),
		);
	}

	get template(): string {
		return asset("/templates/importer.hbs");
	}

	// https://foundryvtt.com/api/classes/client.Adventure.html#prepareImport
	async #prepareImport(old: any, data: AdventureImporter.Data): Promise<any> {
		return await old(data);
	}

	// https://foundryvtt.com/api/classes/client.Adventure.html#import
	async #import(old: any, data: AdventureImporter.Data): Promise<any> {
		return await old(data);
	}

	// https://foundryvtt.com/api/classes/client.Adventure.html#importContent
	async #importContent(old: any, data: AdventureImporter.Data): Promise<any> {
		return await old(data);
	}
}
