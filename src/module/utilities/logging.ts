/* eslint no-console: "off" */

/** Logs an info message to the console. */
export function info(...args: any[]) {
	console.info(`${MODULE_NAME} |`, ...args);
}

/** Logs a debug message to the console. */
export function debug(...args: any[]) {
	console.debug(`${MODULE_NAME} |`, ...args);
}
