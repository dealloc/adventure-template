/** The identifier of this module as it's known to FoundryVTT. */
declare const MODULE_ID: string;
/** The human-readable name of this module. */
declare const MODULE_NAME: string;
/** The human-readable description of this module. */
declare const MODULE_DESCRIPTION: string;

/** A function that can be used as a macro. */
declare type ModuleMacro = (
	token: Token,
	actor: Actor | null,
	scope: Record<any, any>,
) => Promise<void> | void;

// Below are typings that augment missing typing information for Foundry V13

declare namespace foundry.applications.handlebars {
	export {
		renderTemplate,
		loadTemplates,
	} from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/client/applications/handlebars";
}

declare namespace foundry.applications.apps {
	export {
		FilePicker,
		DocumentSheetConfig,
	} from "@league-of-foundry-developers/foundry-vtt-types";
}

declare namespace foundry.applications.sheets {
	export { AdventureImporterV2 } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/client/applications/sheets/_module";
}

declare namespace foundry.applications.sheets.journal {
	// biome-ignore lint/complexity/noStaticOnlyClass: Expansion of FoundryVTT type
	export class JournalEntrySheet {
		static DEFAULT_OPTIONS: JournalSheetOptions;
	}

	export class JournalEntryPageProseMirrorSheet {
		protected _insertElement(element: HTMLElement): void;
	}
}
