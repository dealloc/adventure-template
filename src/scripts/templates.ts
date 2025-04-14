import { asset } from "./utilities/module-path";

export function initializeTemplates() {
    loadTemplates([
        asset('/templates/importer.hbs'),
    ]);
}