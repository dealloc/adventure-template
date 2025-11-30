import path from "node:path";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { visualizer } from "rollup-plugin-visualizer";
import * as sass from "sass-embedded";
import { sveltePreprocess } from "svelte-preprocess";
import type { UserConfig } from "vite";
import checker from "vite-plugin-checker";
import { description, name } from "./package.json";

const config: UserConfig = {
	root: "src/",
	base: `/modules/${name}/`,
	publicDir: path.resolve(__dirname, "public"),
	server: {
		port: 30001,
		open: "/",
		proxy: {
			[`^(?!/modules/${name})`]: "http://localhost:30000/",
			"/socket.io": {
				target: "ws://localhost:30000",
				ws: true,
			},
		},
	},
	build: {
		outDir: path.resolve(__dirname, "dist"),
		emptyOutDir: false,
		sourcemap: true,
		lib: {
			name: "module",
			entry: path.resolve(__dirname, "src/module.ts"),
			formats: ["es"],
			fileName: "module",
		},
	},
	esbuild: {
		minifyIdentifiers: false,
		keepNames: true,
	},
	plugins: [
		svelte({
			preprocess: sveltePreprocess(),
		}),
		checker({
			typescript: true,
			// svelte: { root: __dirname },
		}),
		visualizer({
			gzipSize: true,
			template: "treemap",
		}),
	],
	css: {
		preprocessorOptions: {
			scss: {
				functions: {
					"module-name()": () => {
						return new sass.SassString(name, {});
					},
				},
			},
		},
	},
	define: {
		MODULE_ID: `"${name}"`,
		MODULE_NAME: `"${name}"`,
		MODULE_DESCRIPTION: `"${description}"`,
	},
};

export default config;
