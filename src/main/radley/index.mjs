import { LOC } from '../../resources/regex'

import RadleyRegistry from './registry'
import RadleyParseTree from './tree'

export default class RadleySuite {
    constructor({ args, meta, code, nozzle }) {
        this.args = args
        this.meta = meta
        this.nozzle = nozzle
        this.code = code.split(LOC)

        this.registry = new RadleyRegistry().register(this)
        this.parseTree = new RadleyParseTree().parse(this)
    }

    static suite(opts) {
        return new RadleySuite(opts)
    }
}