import { onInitializeDynamicTokenRingConfig } from "./hooks/dynamic-token-ring";
import { onImportAdventure } from "./hooks/import-adventure";
import { onInitialized } from "./hooks/init";
import { onGetProseMirrorMenuDropDowns } from "./hooks/prose-mirror";
import { onReady } from "./hooks/ready";
import { onSequencerReady } from './hooks/sequencer';

// Called when Foundry initializes
Hooks.once('init', onInitialized);
// Called when Foundry is ready and we can start registering features
Hooks.once('ready', onReady);
// Called when Sequencer is ready to add assets
Hooks.on('sequencerReady', onSequencerReady);
// Called to register the dynamic token ring under assets/spritesheets. Remove this if your campaign doesn't have a ring to register.
Hooks.on("initializeDynamicTokenRingConfig", onInitializeDynamicTokenRingConfig);
// Called when *any* adventure is imported
Hooks.on('importAdventure', onImportAdventure);

// Only hook the prosemirror extensions in debug mode.
// This code gets removed in production
if (process.env.NODE_ENV) {
    Hooks.on("getProseMirrorMenuDropDowns", onGetProseMirrorMenuDropDowns);
}