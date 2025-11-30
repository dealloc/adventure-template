import { debug } from "./utilities/logging";
import { asset } from "./utilities/module";

/** This will request Foundry to pre-load and cache all template files. */
export function initializeTemplates() {
	foundry.applications.handlebars.loadTemplates([
		asset("/templates/importer.hbs"),
		asset("/templates/editor/aside.hbs"),
		asset("/templates/editor/banner.hbs"),
		asset("/templates/editor/encounter.hbs"),
		asset("/templates/editor/statblock.hbs"),
	]);

	debug("preloading templates");
}
