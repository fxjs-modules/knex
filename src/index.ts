import SandBox from './sandbox'

import { FXJSKnex } from '../@types';

const sandbox = new SandBox()
const Knex = sandbox.require('knex', __dirname)

const mod = <FXJSKnex.ExportModule>Knex;
mod.SandBox = SandBox

export = mod