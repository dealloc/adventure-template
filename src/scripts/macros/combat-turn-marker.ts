/**
 * A macro to update the combat turn marker, a feature new in FoundryVTT V13.
 *
 * @param token the currently selected token, if any
 * @param actor the actor of the currently selected token
 * @param scope if parameters were passed to this macro, they are available on scope.
 */
export default async function (token: Token | null, actor: Actor | null, scope: Record<any, any>): Promise<void> {
	new foundry.applications.apps.FilePicker({
		type: 'image',
		callback: async (path: string) => {
			let config = game.settings?.get('core', 'combatTrackerConfig');

			(config as any).turnMarker.enabled = true;
			(config as any).turnMarker.src = path;

			game.settings?.set('core', 'combatTrackerConfig', config as any);
		},
	}).browse();
}
