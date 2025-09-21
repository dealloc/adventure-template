/**
 * Utility method for retrieving a module-scoped path.
 * Can also be used as an asset: asset`/this/is/a/path`
 *
 * @param path The path to get relative to the module.
 * @returns A full path inside the module of this adventure.
 */
export function asset(path: any): string {
	return `modules/${MODULE_ID}${path}`;
}

/** Get the module object, mostly used to store runtime information localized to this module. */
export function getModule(): Module & Record<string, ModuleMacro> {
	const module = (game as any).modules.get(MODULE_ID);

	if (module === null || module === undefined) {
		throw new Error(`Failed to retrieve module ${MODULE_ID}`);
	}

	return module;
}
