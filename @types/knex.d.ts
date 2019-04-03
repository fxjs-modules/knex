import Knex = require('knex')

declare namespace FXJSKnexModule {
    interface KnexFunc {
        (config: Knex.Config): Knex;
    }

    type KnexInstance = Knex;
    type KnexConfig = Knex.Config;

    interface ExportModule extends KnexFunc {
        SandBox: typeof Class_SandBox,

        [k: string]: any
    }
}

export as namespace FXJSKnex