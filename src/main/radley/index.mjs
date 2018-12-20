import { LOC, VARIABLES } from '../../resources/regex'

import RadleyMeta from './meta'
import RadleyTree from './tree'
import RadleyRegistry from './registry'

export default class RadleySuite {
    constructor({ args, meta, code }) {
        this.registry = new RadleyRegistry()

        this.args = args.map(this.registry.findOrCreate)

        this.meta = RadleyMeta.init(meta)
        this.tree = RadleyTree.init(code.replace(VARIABLES, this.registry.findOrCreate).split(LOC))
    }

    static suite(opts) {
        return new RadleySuite(opts)
    }
}
