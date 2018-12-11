import regex from '../resources/json/regex.json'
import util from 'util'

import RadleyParser from './parse'
import RadleyRegistry from './registry'

export default class RadleySuite {
    constructor({ args, meta, code, nozzle }) {
        this.args = args
        this.meta = meta
        this.nozzle = nozzle

        this.code = code.split(eval(regex.NEW_LINE_OR_SEMI))
        this.registry = RadleyRegistry.register(this.args)
        this.tree = RadleyParser.parseTree(this.code)

        // nozzle.fit(this)
        // this.suite = this.nozzle.squirt(this.meta, this.args, this.tree)
    }

    static suite(opts) {
        return new RadleySuite(opts)
    }
}
