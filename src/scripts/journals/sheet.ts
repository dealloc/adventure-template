import CONSTANTS from "../constants";

export default class AdventureJournalSheet extends JournalSheet {
    static get defaultOptions(): JournalSheetOptions {
        return {
            ...JournalSheet.defaultOptions,
            classes: [...JournalSheet.defaultOptions.classes, CONSTANTS.id],
        };
    }

    // Allows us to filter out headings from the table of contents in the sidebar.
    protected async _renderHeadings(page: HTMLElement, toc: Record<string, JournalEntryPage.JournalEntryPageHeading>): Promise<void> {
        for (const [key, heading] of Object.entries(toc)) {
            // if our heading contains a <span> element it's most likely a styled title we don't want to show.
            // we remove it from the ToC (Table of Contents).
            if (this.#shouldBeRemovedFromToc(key, heading)) {
                delete toc[key];
            }

            heading.text = this.#cleanUpTocTitles(heading);
        }

        return super._renderHeadings(page, toc);
    }

    #shouldBeRemovedFromToc(key: string, heading: JournalEntryPage.JournalEntryPageHeading): boolean {
        if (heading.element?.querySelectorAll('span').length && !heading.element?.classList?.contains('show-toc')) {
            return true;
        }
        if (heading.element?.classList?.contains('hide-toc')) {
            return true;
        }

        return false;
    }

    #cleanUpTocTitles(heading: JournalEntryPage.JournalEntryPageHeading): string {
        if (heading.element.parentElement.classList.contains('statblock')) {
            // strip 'creature 0' etc from the statblock title.
            heading.text = [].reduce.call(heading.element.childNodes, function(a, b) { return a + (b.nodeType === 3 ? b.textContent : ''); }, '');
        }

        return heading.text;
    }
}