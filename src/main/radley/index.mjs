import { LINES_OF_CODE, VARIABLES, BLANK_LINE } from '../../resources'

import RadleyMeta from './meta'
import RadleyTree from './tree'
import RadleyRegistry from './registry'

export default class RadleySuite {
    constructor({ args, meta, code, nozzle }) {
        this.registry = new RadleyRegistry()

        this.args = args.map(this.registry.findOrCreate)
        this.meta = meta
        this.code = code
            .replace(VARIABLES, this.registry.findOrCreate)
            .split(LINES_OF_CODE)
            .filter(function (line) { return !BLANK_LINE.test(line) })

        this.snap = RadleyMeta.init(this.meta)
        this.tree = RadleyTree.init(this.code)

    }

    static suite(opts) {
        return new RadleySuite(opts)
    }
}
