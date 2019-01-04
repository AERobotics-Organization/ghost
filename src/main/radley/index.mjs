import { CLEAN_CODE } from '../../resources'

import RadleyTree from './tree'
import RadleyRegistry from './registry'

export default class RadleySuite {
    constructor({ args, code, meta, nozzle, generic }) {
        this.suite = {}
        this.args = args
        this.meta = meta
        this.nozzle = nozzle
        this.generic = generic
        this.registry = new RadleyRegistry()
        this.tree = RadleyTree.makeTree(CLEAN_CODE(code))
    }

    static suite(opts) {
        return new RadleySuite(opts)
    }

    call(args) {
        const meta = this.meta(args)
        const func = this.suite[meta] ||
            (this.suite[meta] = this.nozzle.Method(this.args, this.toSource(meta)))

        return func(args)
    }

    toSource(meta, tree = this.tree) {
        let source = ''
        for (const statement of tree) {
            const nozzle = new this.nozzle.Node(meta, statement, this.registry)

            source += nozzle.open()
            source += this.toSource(meta, statement)
            source += nozzle.close()
        }

        return source
    }
}
