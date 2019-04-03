/// <reference path="../@types/index.d.ts" />

import SandBox from './sandbox'

const sandbox = new SandBox()
const OKnex: FXJSKnex.FXJSKnexModule.ExportModule = sandbox.require('knex', __dirname)

OKnex.SandBox = SandBox

export = OKnex