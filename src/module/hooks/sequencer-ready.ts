declare const Sequencer: any;

// Called when Sequencer is ready to register assets.
export function onSequencerReady() {
	Sequencer.Database.registerEntries(MODULE_ID, {});
}
