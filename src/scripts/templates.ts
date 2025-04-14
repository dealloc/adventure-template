import { asset } from "./utilities/module-path";

export function initializeTemplates() {
    loadTemplates([
        asset('/templates/importer.hbs'),
        asset('/templates/prose-mirror/aside.hbs'),
        asset('/templates/prose-mirror/banner.hbs'),
        asset('/templates/prose-mirror/encounter.hbs'),
        asset('/templates/prose-mirror/statblock.hbs'),
    ]);
}