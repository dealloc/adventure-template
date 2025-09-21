/* eslint @typescript-eslint/no-unused-vars: "off" */

/**
 * A blank macro to serve as boilerplate code for your own macros.
 *
 * @param token the currently selected token, if any
 * @param actor the actor of the currently selected token
 * @param scope if parameters were passed to this macro, they are available on scope.
 */
export default async function (
	token: Token | null,
	actor: Actor | null,
	scope: Record<any, any>,
): Promise<void> {
	alert("This is your macro!");
}
