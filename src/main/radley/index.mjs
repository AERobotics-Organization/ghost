import { NEW_LINE, VARIABLES, NON_BLANK_LINES } from '../../resources'

import RadleyRegistry from './registry'
import RadleyStatement from './statement'

export default class RadleySuite {
    constructor({ args, meta, code, nozzle }) {
        this.registry = new RadleyRegistry()

        this.meta = meta
        this.args = args
        this.code = code
            .split(NEW_LINE)
            .filter(NON_BLANK_LINES)

        this.tree = this.makeTree()

        this.suite = {}
        this.nozzle = nozzle
    }

    static suite(opts) {
        return new RadleySuite(opts)
    }

    call(...args) { /**  this.suite[] = this.nozzle.toFunction(meta, this) */ }

    makeTree(block = [], depth = 0, index = [0]) {
        while (this.code[index[0]] !== undefined) {
            const statement = new RadleyStatement(this.code[index[0]])

            if (statement.depth <= depth)
                return

            block.push(statement), index[0]++

            if (statement.isContainer())
                this.makeTree(statement, statement.depth, index)
        }

        return block
    }

}
