// This file contains typings for V12 and V13 not available in the typings package.

declare namespace foundry.applications.sheets {
    export class AdventureImporter {
        static DEFAULT_OPTIONS: AdventureImporter.Options;

        constructor(options: { document: Adventure }, ...args: any[]);
    }
}