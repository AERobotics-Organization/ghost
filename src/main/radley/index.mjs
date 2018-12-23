import { NEW_LINE, VARIABLES, OUT_BLANK_LINES } from '../../resources'

import RadleyMeta from './meta'
import RadleyTree from './tree'
import RadleyRegistry from './registry'

export default class RadleySuite {
    constructor({ args, meta, code, nozzle }) {
        this.registry = new RadleyRegistry()

        this.args = args.map(this.registry.findOrCreate)

        this.meta = RadleyMeta.init(meta)
        this.tree = RadleyTree.init(code
            .replace(VARIABLES, this.registry.findOrCreate)
            .split(NEW_LINE)
            .filter(OUT_BLANK_LINES))

        this.suite = nozzle.fit(this)
    }

    static suite(opts) {
        return new RadleySuite(opts)
    }
}
