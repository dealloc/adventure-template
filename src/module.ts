import "./styles/module.scss";
import "./module/sheets/journal";
import "./module/sheets/text-page";
import { onAdventureImported } from "./module/hooks/adventure-imported";
import { onInitializeDynamicTokenRingConfig } from "./module/hooks/dynamic-token-ring";
import { onInit } from "./module/hooks/init";
import { onOneTimeSetup } from "./module/hooks/one-time-setup";
import { onGetProseMirrorMenuDropDowns } from "./module/hooks/prose-mirror";
import { onReady } from "./module/hooks/ready";
import { onSequencerReady } from "./module/hooks/sequencer-ready";

// First event in Foundry's lifecycle. Not much functionality is initialised but we mostly use this to setup things like
// settings, macros and so forth.
Hooks.once("init", onInit);

// Called when Foundry has initialised the system and most of it's infrastructure, this is when modules can start providing
// interactivity.
Hooks.once("ready", onReady);
Hooks.once("ready", onOneTimeSetup);

// If the sequencer module is enabled, this hook will be called when it's ready. We can then register our custom assets.
Hooks.once("sequencerReady", onSequencerReady);

// Called to register the dynamic token ring under assets/spritesheets. Remove this if your campaign doesn't have a ring to register.
Hooks.on(
	"initializeDynamicTokenRingConfig",
	onInitializeDynamicTokenRingConfig,
);

// Called when *any* adventure is imported
Hooks.on("importAdventure", onAdventureImported);

// Only hook the prosemirror extensions in debug mode.
// This code gets removed in production
if (import.meta.env.DEV) {
	Hooks.on("getProseMirrorMenuDropDowns", onGetProseMirrorMenuDropDowns);
}
