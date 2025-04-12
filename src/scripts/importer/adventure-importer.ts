import CONSTANTS from "../constants";

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
        return `modules/${CONSTANTS.id}/templates/importer.hbs`;
    }
}