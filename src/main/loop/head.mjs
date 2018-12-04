import props from '../../resources/arrow.json'

import Variable from '../variable'
import util from 'util'

export default class LoopHead {
    constructor(args) {
        this.variable = args.variable || new Variable({})
        this.condition = args.condition || props.LT
        this.start = args.start || 0
        this.end = args.end
        
    }

    toString() { return `${this.variable}${this.condition}${this.end}` }
    [util.inspect.custom]() { return this.toString() }
}
