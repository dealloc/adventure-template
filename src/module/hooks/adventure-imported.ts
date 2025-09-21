import { info } from "../utilities/logging";

/** Called whenever any adventure compendia is imported. */
export function onAdventureImported(adventure: Adventure) {
	info("Adventure imported:", adventure);
}
