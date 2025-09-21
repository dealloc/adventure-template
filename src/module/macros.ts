import blankMacro from "./macros/blank-macro";
import { getModule } from "./utilities/module";
import { debug } from "./utilities/logging";

export const macros: Record<string, ModuleMacro> = {
	blankMacro,
};

/** Automatically register all macros on the module */
export function initializeMacros(): void {
	const module = getModule();

	module.macros = macros;
	debug("registered following macros:", Object.keys(macros));
}
