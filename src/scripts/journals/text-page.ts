export default class AdventureJournalTextPageSheet extends JournalTextPageSheet {
    // register your journal's custom listeners.
    activateListeners(html: JQuery): void {
        $(html).children('.narrate').on('click', this.#narrate);

        super.activateListeners(html);
    }

    #narrate() {
        alert('narrate me!');
    }

    protected async _renderInner(data: ReturnType<this["getData"]>): Promise<JQuery<HTMLElement>> {
        const result = await super._renderInner(data);
        this.#updateImages(result);
        result.find('[data-id][data-type="Scene"]').on('click', this.#openScene);

        return result;
    }

    // Automatically add 'shape-outside' to all images with '.outside' classes.
    #updateImages(content: JQuery<HTMLElement>) {
        content.find("img.outside").each((_, img) => {
            const $img = $(img);
            const src = $img.attr("src");
            const existingStyle = $img.attr("style") || "";
            const shapeOutsideRule = `shape-outside: url('${src}');`;

            // Append if not already present
            if (!existingStyle.includes("shape-outside")) {
                $img.attr("style", `${existingStyle} ${shapeOutsideRule}`.trim());
            }
        });
    }

    #openScene(event: JQuery.Event) {
        event.preventDefault();
        event.stopPropagation();

        const id: string = (event as any).currentTarget.dataset.id;
        const scene = game.scenes.get(id);

        if (scene) {
            (scene as any).view();
        }
    }
}