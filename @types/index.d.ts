/// <reference types="fibjs" />
/// <reference types="knex" />

import Knex = require('knex')

declare namespace FXJSKnex {
    interface ExportModule extends Knex {
        SandBox: typeof Class_SandBox,

        [k: string]: any
    }
}

declare module "@fxjs/orm" {
    const FibKnex: FXJSKnex.ExportModule;

    export = FibKnex;
}