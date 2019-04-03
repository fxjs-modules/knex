import SandBox from './sandbox'

import { FXJSKnex } from '../@types';

const sandbox = new SandBox()
const OKnex: FXJSKnex.ExportModule = sandbox.require('knex', __dirname)

const mod = OKnex;
mod.SandBox = SandBox

export = mod