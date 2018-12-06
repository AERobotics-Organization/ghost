import config from '../../../resources/arrow.json'

import Var from '../variable'
import Block from '../block'
import util from 'util'

export default class Loop {
    constructor(args = {}, blocks = []) {
        super(blocks, scope)

        this.var = new Var({ init: 'start' in args ? args.start : 0 })
        this.type = 'type' in args ? args.type : config.WHILE_LOOP
        this.step = 'step' in args ? args.step : config.INC
        this.check = 'check' in args ? args.check : config.LT
        this.stop = 'stop' in args ? args.stop : 0
    }

    toString() { }
    [util.inspect.custom]() { return this.toString() }
}

