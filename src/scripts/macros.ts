import blankMacro from "./macros/blank-macro";
import combatTurnMarker from "./macros/combat-turn-marker";
import setWeather from "./macros/set-weather";
import updateLanding from "./macros/update-landing";
import updateWorldDetails from "./macros/update-world-details";
import getModule from "./utilities/get-module";

export function initializeMacros(): void {
	const module = getModule();

	(module as any).macros = {
		setWeather,
		updateLanding,
		updateWorldDetails,
		blankMacro,
		combatTurnMarker,
	};
}
