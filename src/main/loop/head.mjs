import props from '../../resources/arrow.json'
import util from 'util'

import Variable from '../variable'

export default class LoopHead {
    constructor(args) {
        this.stop = args.stop
        this.var = args.var || new Variable({ init: 0 })
        this.type = args.type || props.FOR_LOOP
        this.step = args.step || props.INC
        this.check = args.check || props.LT
    }

    toString() {
        return [
            `${this.var.name}=${this.var.initial}`,
            `${this.var.name}${this.check}${this.stop}`,
            `${this.var.name}${this.step}`
        ].join(';')
    }

    [util.inspect.custom]() { return this.toString() }
}
