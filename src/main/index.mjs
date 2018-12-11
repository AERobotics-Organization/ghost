import regex from '../resources/json/regex.json'
import util from 'util'

import RadleyParser from './parse'
import RadleyRegistry from './registry'

export default class RadleySuite {
    constructor({ args, meta, code, nozzle }) {
        this.registry = RadleyRegistry.register(args)
        this.parseTree = RadleyParser.parseTree(
            code.split(eval(regex.NEW_LINE_OR_SEMI)))

        this.meta = meta
        this.nozzle = nozzle

        this.suite = nozzle.fit(this)
    }

    static suite(opts) {
        return new RadleySuite(opts)
    }
}
