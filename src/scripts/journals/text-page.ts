export default class AdventureJournalTextPageSheet extends JournalTextPageSheet {
    // register your journal's custom listeners.
    activateListeners(html: JQuery): void {
        $(html).children('.narrate').on('click', this.#narrate);

        super.activateListeners(html);
    }

    #narrate() {
        alert('narrate me!');
    }
}