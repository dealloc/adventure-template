import blankMacro from "./macros/blank-macro";
import { debug } from "./utilities/logging";
import { getModule } from "./utilities/module";

export const macros: Record<string, ModuleMacro> = {
	blankMacro,
};

/** Automatically register all macros on the module */
export function initializeMacros(): void {
	const module = getModule();

	module.macros = macros;
	debug("registered following macros:", Object.keys(macros));
}
