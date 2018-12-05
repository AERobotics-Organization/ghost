import config from '../../../resources/arrow.json'

import util from 'util'
import Var from '../variable'

export default class Loop {
    constructor(args) {
        this.var = args.var || new Var({ init: 0 })
        this.type = args.type || config.WHILE_LOOP
        this.step = args.step || config.INC
        this.check = args.check || config.LT
        this.stop = args.stop || 0

        this.body = args.body || `null;`
    }

    toString() {
        const init = `${this.var.type} ${this.var.name} = ${this.var.init}`
        const check = `${this.var.name} ${this.check} ${this.stop}`
        const step = `${this.var.name} ${this.step}`

        return `${init}; ${this.type} (${check}) { ${this.body} ${step} }`
    }

    [util.inspect.custom]() { return this.toString() }
}

