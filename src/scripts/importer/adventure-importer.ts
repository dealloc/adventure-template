import CONSTANTS from "../constants";
import {asset} from "../utilities/module-path";

export default class Pf2eAdventureImporter extends foundry.applications.sheets.AdventureImporter {
	static DEFAULT_OPTIONS = {
		...foundry.applications.sheets.AdventureImporter.DEFAULT_OPTIONS,
		classes: [
			...foundry.applications.sheets.AdventureImporter.DEFAULT_OPTIONS.classes,
			CONSTANTS.id,
		]
	};

	constructor(options, ...args) {
		super(options, ...args);

		// Overrides the adventure's hooks and redirect them through this class.
		// ALWAYS call the 'old' parameter in the methods below or the import WILL break.
		const {document: adventure} = options;
		adventure.prepareImport = this.#prepareImport.bind(this, adventure.prepareImport.bind(adventure));
		adventure.import = this.#import.bind(this, adventure.import.bind(adventure));
		adventure.importContent = this.#importContent.bind(this, adventure.importContent.bind(adventure));
	}

	get template(): string {
		return asset`/templates/importer.hbs`;
	}

	// https://foundryvtt.com/api/classes/client.Adventure.html#prepareImport
	async #prepareImport(old, data: AdventureImportData): Promise<AdventureImportResult> {
		const result = await old(data);

		return result;
	}

	// https://foundryvtt.com/api/classes/client.Adventure.html#import
	async #import(old, data: AdventureImportData): Promise<AdventureImportResult> {
		const result = await old(data);

		return result;
	}

	// https://foundryvtt.com/api/classes/client.Adventure.html#importContent
	async #importContent(old, data: AdventureImportData): Promise<AdventureImportResult> {
		const result = await old(data);

		return result;
	}
}
