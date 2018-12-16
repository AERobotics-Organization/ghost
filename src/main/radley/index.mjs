import { LOC } from '../../resources/regex'

import RadleyRegistry from './registry'
import RadleyParseTree from './tree'
import RadleyMeta from './meta'

export default class RadleySuite {
    constructor({ args, meta, code, nozzle }) {
        this.args = args
        this.meta = meta
        this.nozzle = nozzle

        this.code = code.split(LOC)
        this.snapshots = new RadleyMeta().snapshots(meta)
        // this.registry = new RadleyRegistry().register(this)
        // this.parseTree = new RadleyParseTree().parse(this)
    }

    static suite(opts) {
        return new RadleySuite(opts)
    }
}
