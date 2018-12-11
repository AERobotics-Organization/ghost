import regex from '../resources/json/regex.json'
import util from 'util'

import RadleyParser from './parse'
import RadleyRegistry from './registry'

export default class RadleySuite {
    constructor({ args, meta, code, nozzle }) {
        this.args = args
        this.meta = meta
        this.nozzle = nozzle

        this.code = code.split(eval(regex.LOC))
        this.registry = RadleyRegistry.register(this)
        this.tree = RadleyParser.parseTree(this)

        // this.suite = nozzle.fit(this)
    }

    static suite(opts) {
        return new RadleySuite(opts)
    }
}
