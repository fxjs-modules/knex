import vm = require('vm')
import path = require('path')

const __root = path.resolve(__dirname, '../')

function patchMods (
    this: Box
) {
    this.add({
        'uuid': this.require('./node_modules/uuid', __root)
    })
}

export default class Box extends vm.SandBox {
    constructor () {
        const [ mods = {}, __require = function () {}, __global = undefined ] = Array.prototype.slice.apply(arguments)
        
        super({
            ...mods,
            'fs': require('fs'),
            'path': require('path'),
            'os': require('os'),
            'url': require('url'),
            'tty': require('tty'),
            'util': require('util'),
            'events': require('events'),
            'assert': require('assert'),
            'crypto': require('crypto')
        }, __require, __global)

        patchMods.call(this);
    }
}