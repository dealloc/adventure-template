import CONSTANTS from "../constants";

/**
 * Utility method for retrieving a module-scoped path.
 * Can also be used as an asset: asset`/this/is/a/path`
 *
 * @param path The path to get relative to the module.
 * @returns A full path inside the module of this adventure.
 */
export function asset(path: any): string {
    return `modules/${CONSTANTS.id}${path}`;
}