import { LOC } from '../../resources/regex'

import RadleyRegistry from './registry'

export default class RadleySuite {
    constructor({ args, meta, code }) {
        this.registry = new RadleyRegistry()

        this.args = args
        this.meta = meta
        this.code = code.split(LOC)

        this.snaps = RadleyMeta.makeSnaps(meta)
        this.trees = RadleyTree.makeTrees(this)
    }

    static suite(opts) {
        return new RadleySuite(opts)
    }
}
