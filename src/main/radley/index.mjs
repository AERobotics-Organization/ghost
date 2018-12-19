import { LOC } from '../../resources/regex'

import RadleyMeta from './meta'
import RadleyTree from './tree'
import RadleyRegistry from './registry'

export default class RadleySuite {
    constructor({ args, meta, code }) {
        this.registry = new RadleyRegistry()

        this.meta = meta
        this.args = args
        this.code = code.split(LOC)

        this.meta = RadleyMeta.init(this.meta)
        this.tree = RadleyTree.init(this.code)
    }

    static suite(opts) {
        return new RadleySuite(opts)
    }
}
