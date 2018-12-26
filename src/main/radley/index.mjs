import { NEW_LINE, VARIABLES, NON_BLANK_LINES } from '../../resources'

import RadleyMeta from './meta'
import RadleyTree from './tree'
import RadleyRegistry from './registry'

export default class RadleySuite {
    constructor({ args, meta, code }) {
        this.registry = new RadleyRegistry()
        this.args = args.map(this.registry.findOrCreate)

        this.meta = RadleyMeta.make(meta)
        this.tree = RadleyTree.make(code
            .replace(VARIABLES, this.registry.findOrCreate)
            .split(NEW_LINE)
            .filter(NON_BLANK_LINES))

        this.suite = {}
        this.nozzle = null
    }

    static suite(opts) {
        return new RadleySuite(opts)
    }

    fit(nozzle) {
        this.nozzle = nozzle

        for (const meta of this.meta)
            this.suite[meta] = this.nozzle.toFunction(meta, this)
    }
}
