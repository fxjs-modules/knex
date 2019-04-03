# Fibjs Wrapper For Knexjs

[![Build Status](https://travis-ci.org/fxjs-modules/knex.svg)](https://travis-ci.org/fxjs-modules/knex)
[![NPM version](https://img.shields.io/npm/v/@fxjs/knex.svg)](https://www.npmjs.org/package/@fxjs/knex)
[![Build status](https://ci.appveyor.com/api/projects/status/n8gbusvk9t69oo8m?svg=true)](https://ci.appveyor.com/project/richardo2016/knex)

## Introduction

One fibjs wrapper for `knex`, which is designed for `NodeJS` and `Browser`.

## Pre-requisite

There's no built-in `knex` in this package's dependencies, for purpose that you can use any valid version `knex` as you like

- `knex`@`>= 0.14 < 0.17`

if use typescript, install types to enable typo lint:

- `@types/fibjs`
- `@types/knex`
- `@types/node`

## APIs

### cjs: Wrapped Knex

You can get Wrapped Knex safely like this:

```javascript
const FKenx = require('@fxjs/knex')

assert.property(FKenx, 'SandBox')
```

Distinguished with the original `knex` package, fibjs version one has more properties:

- `SandBox`: one SandBox class extended from vm.SandBox, which has required modules on which `knex` run in fibjs;

## Use `FKenx.SandBox` to customized your own SandBox

There's only necessary modules for `knex` in built-in `sandbox`, you can customized your own sandbox by create one `SandBox` instance. Just use `FKenx.SandBox` as fibjs's built-in `vm.SandBox` like this:

```javascript
const FKenx = require('@fxjs/knex')

const vbox = new FKenx.SandBox(
    // modules
    {
        a: AMOD,
        b: BMOD,
        // useless, it's reserved module
        uuid: require('uuid')
    },
    // optional, fallback function
    (name) => require(name),
    // optional, global object
    {
        // ...
    }
)
```

All reserved modules would NOT been overwritten by the ones user passing, they are:

- `fs`
- `path`
- `os`
- `url`
- `tty`
- `util`
- `events`
- `assert`
- `crypto`
- `uuid`

## LICENSE

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2018-present, Richard