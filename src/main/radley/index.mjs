import { VARIABLES, NON_BLANK_LINES } from '../../resources'

import RadleyTree from './tree'
import RadleyRegistry from './registry'

export default class RadleySuite {
    constructor({ args, code, nozzle }) {
        this.registry = new RadleyRegistry()

        this.suite = {}
        this.nozzle = nozzle

        this.args = args.map(this.registry.findOrCreate)
        this.tree = RadleyTree.makeTree(code
            .replace(VARIABLES, this.registry.findOrCreate)
            .split('\n')
            .filter(NON_BLANK_LINES))
    }

    static suite(opts) {
        return new RadleySuite(opts)
    }

    lookup(meta) {
        return this.suite[meta] /** If we don't have a function make one */
            || (this.suite[meta] = this.nozzle.makeFunction(this.args, this.toSource(meta)))
    }

    toSource(meta, tree = this.tree) {
        let source = ''

        for (const statement of tree) {
            source += this.nozzle.open({ meta, statement, registry: this.registry })

            if (statement.length)
                source += this.toSource(meta, statement)

            source += this.nozzle.close({ meta, statement, registry: this.registry })
        }

        return source
    }
}
