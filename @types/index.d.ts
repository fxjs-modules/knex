/// <reference types="fibjs" />
/// <reference types="knex" />

/// <reference path="./knex.d.ts" />

declare module "@fxjs/knex" {
    const FibKnex: FXJSKnex.FXJSKnexModule.ExportModule;

    export = FibKnex;
}