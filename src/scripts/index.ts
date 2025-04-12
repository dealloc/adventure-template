import { onInitializeDynamicTokenRingConfig } from "./hooks/dynamic-token-ring";
import { onInitialized } from "./hooks/init";
import { onGetProseMirrorMenuDropDowns } from "./hooks/prose-mirror";
import { onSequencerReady } from './hooks/sequencer';

// Called when Foundry initializes
Hooks.once('init', onInitialized);
// Called when Sequencer is ready to add assets
Hooks.on('sequencerReady', onSequencerReady);
// Called to register the dynamic token ring under assets/spritesheets. Remove this if your campaign doesn't have a ring to register.
Hooks.on("initializeDynamicTokenRingConfig", onInitializeDynamicTokenRingConfig);

// Only hook the prosemirror extensions in debug mode.
// This code gets removed in production
if (process.env.NODE_ENV) {
    Hooks.on("getProseMirrorMenuDropDowns", onGetProseMirrorMenuDropDowns);
}