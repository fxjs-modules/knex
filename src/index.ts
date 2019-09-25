/// <reference path="../@types/index.d.ts" />

import SandBox from './sandbox'

const sandbox = new SandBox()
const OKnex: FXJSKnex.FXJSKnexModule.ExportModule = sandbox.require('knex', __dirname)

const mod = OKnex;
mod.SandBox = SandBox

export = mod