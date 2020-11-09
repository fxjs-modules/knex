/// <reference path="./typo/index.d.ts" />

import Knex = require('./typo/index');

import SandBox from './sandbox'

const sandbox = new SandBox()
const OKnex: Knex & {
    SandBox: typeof Class_SandBox,
} = sandbox.require('knex', __dirname)

OKnex.SandBox = SandBox

export = OKnex;