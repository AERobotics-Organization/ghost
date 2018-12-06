import config from '../../../resources/arrow.json'

import Var from '../variable'
import util from 'util'

export default class Loop {
    constructor(args = {}, code = []) {
        this.var = new Var()
        this.type = 'type' in args ? args.type : config.WHILE_LOOP
        this.step = 'step' in args ? args.step : config.INC
        this.check = 'check' in args ? args.check : config.LT
    }

    inject(context) { }
    toString() { }
    [util.inspect.custom]() { return this.toString() }
}

