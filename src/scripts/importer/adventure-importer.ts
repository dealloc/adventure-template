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
}