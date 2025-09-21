import { getSetting, setSetting } from "../settings";
import oneTimeSetup from "../settings/one-time-setup";
import { info } from "../utilities/logging";

/**
 * Called during the `ready` hook.
 *
 * Used for initialisation that should only be performed once (usually first time module is loaded).
 * Examples are showing the adventure import window.
 */
export function onOneTimeSetup() {
	const isFirstTimeSetup = getSetting<boolean>(oneTimeSetup);

	if (!isFirstTimeSetup) {
		return;
	}

	setSetting<boolean>(oneTimeSetup, false);
	info("Performing first time setup");

	// This is where you can initialize settings / logic that runs only the first time after installing the package.
}
