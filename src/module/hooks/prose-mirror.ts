// This file contains hooks to insert ProseMirror (journal) functionality.
import { asset } from "../utilities/module";

// helper function to insert HTML blocks, as that's what most of these snippets do.
const _insertHtml = (state: any, dispatch: any, html: string) => {
	const { selection, schema } = state;
	const { $from } = selection;

	// Create a temporary DOM element to parse the HTML
	const wrapper = document.createElement("div");
	wrapper.innerHTML = html;

	// Convert HTML to ProseMirror nodes using the schema's DOMParser
	const fragment =
		foundry.prosemirror.DOMParser.fromSchema(schema).parseSlice(
			wrapper,
		).content;

	// Apply the transformation if dispatch is provided
	if (dispatch) {
		dispatch(state.tr.insert($from.pos, fragment));
	}
};

export function onGetProseMirrorMenuDropDowns(menu: any, dropdowns: any) {
	dropdowns.format.entries.push({
		action: MODULE_ID,
		title: MODULE_NAME,
		children: [
			{
				action: "pf2e-as-encounter",
				class: "pf2e-as-encounter",
				title: "Encounter block",
				async cmd(state: any, dispatch: any) {
					const template = await foundry.applications.handlebars.renderTemplate(
						asset("/templates/editor/encounter.hbs"),
						{},
					);
					_insertHtml(state, dispatch, template);

					return true; // Command executed successfully
				},
			},
			{
				action: "pf2e-as-statblock",
				class: "pf2e-as-statblock",
				title: "Stat block",
				async cmd(state: any, dispatch: any) {
					const template = await foundry.applications.handlebars.renderTemplate(
						asset("/templates/editor/statblock.hbs"),
						{},
					);
					_insertHtml(state, dispatch, template);

					return true; // Command executed successfully
				},
			},
			{
				action: "pf2e-as-aside",
				class: "pf2e-as-aside",
				title: "Aside block",
				async cmd(state: any, dispatch: any) {
					const template = await foundry.applications.handlebars.renderTemplate(
						asset("/templates/editor/aside.hbs"),
						{},
					);
					_insertHtml(state, dispatch, template);

					return true; // Command executed successfully
				},
			},
			{
				action: "pf2e-as-narrate",
				class: "pf2e-as-narrate",
				title: "Narrate",
				cmd: foundry.prosemirror.commands.wrapIn(menu.schema.nodes.section, {
					_preserve: {
						class: "narrate",
					},
				}),
			},
			{
				action: "pf2e-as-year",
				class: "pf2e-as-year",
				title: "Year Absalom Reckoning",
				mark: menu.schema.marks.span,
				attrs: { _preserve: { class: "ar" } },
				priority: 1,
				cmd: foundry.prosemirror.commands.toggleMark(menu.schema.marks.span, {
					_preserve: { class: "ar" },
				}),
			},
			{
				action: "pf2e-as-banner",
				class: "pf2e-as-banner",
				title: "Image banner with title",
				cmd(state: any, dispatch: any) {
					new foundry.applications.apps.FilePicker({
						type: "image",
						callback: async (path: string) => {
							const template =
								await foundry.applications.handlebars.renderTemplate(
									asset("/templates/editor/banner.hbs"),
									{ path },
								);
							_insertHtml(state, dispatch, template);
						},
					}).browse();

					return true; // Command executed successfully
				},
			},
		],
	});
}
