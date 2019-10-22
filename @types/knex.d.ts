/// <reference types="@fibjs/types" />
/// <reference types="knex" />

import * as Knex from 'knex'

export { Knex }
export interface KnexFunc {
    (config: Knex.Config): Knex;
}

export type KnexInstance = Knex;
export type KnexConfig = Knex.Config;

export type ExportModule = KnexFunc & Fibjs.AnyObject & {
    SandBox: typeof Class_SandBox,
}

export as namespace FKnexNS

declare module "@fxjs/knex" {
    const FibKnex: ExportModule;

    export = FibKnex;
}