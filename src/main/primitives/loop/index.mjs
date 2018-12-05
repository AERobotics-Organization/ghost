import config from '../../../resources/arrow.json'

import Var from '../variable'
import Block from '../block'
import util from 'util'

export default class Loop extends Block {
    constructor(args = {}, blocks = [], scope = {}) {
        super(blocks, scope)

        this.var = new Var({ init: args.start || 0 })
        this.type = args.type || config.WHILE_LOOP
        this.step = args.step || config.INC
        this.check = args.check || config.LT
        this.stop = args.stop || 0
    }

    inject() {
        this.blocks = this.blocks.map(function (block) {
            return block.replace(new RegExp('\\$\\w+', 'g'), this.lookup.bind(this))
        }, this)
    }

    lookup(variable) {
        return !isNaN(variable.slice(1))
            ? this.var.id
            : this.scope[variable.slice(1)].id
    }

    toString() {
        return `${this.var}; ${this.type} (${this.var.id} ${this.check} ${this.stop}) { ${this.blocks}; ${this.var.id} ${this.step} }`
    }

    [util.inspect.custom]() { return this.toString() }
}
