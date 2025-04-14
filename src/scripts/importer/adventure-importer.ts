import CONSTANTS from "../constants";
import { asset } from "../utilities/module-path";

export default class Pf2eAdventureImporter extends AdventureImporter {
    static get defaultOptions(): AdventureImporter.Options {
        return {
            ...super.defaultOptions,
            classes: [
                ...super.defaultOptions.classes,
                CONSTANTS.id,
            ]
        };
    }

    get template(): string {
        return asset`/templates/importer.hbs`;
    }

    constructor(adventure: Adventure, options: ApplicationOptions) {
        super(adventure, options);

        // Overrides the adventure's hooks and redirect them through this class.
        // ALWAYS call the 'old' parameter in the methods below or the import WILL break.
        adventure.prepareImport = this.#prepareImport.bind(this, adventure.prepareImport.bind(adventure));
        adventure.import = this.#import.bind(this, adventure.import.bind(adventure));
        adventure.importContent = this.#importContent.bind(this, adventure.importContent.bind(adventure));
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