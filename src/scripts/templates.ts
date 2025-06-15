import {asset} from "./utilities/module-path";

export function initializeTemplates() {
	foundry.applications.handlebars.loadTemplates([
		asset('/templates/importer.hbs'),
		asset('/templates/editor/aside.hbs'),
		asset('/templates/editor/banner.hbs'),
		asset('/templates/editor/encounter.hbs'),
		asset('/templates/editor/statblock.hbs'),
	]);
}
