import util from 'util'
import props from '../resources/arrow.json'

export default class LoopHead {
    constructor(args) {
        this.variable = args.variable
        this.condition = args.condition
        this.start = args.start
        this.end = args.end
    }

    toString() { }
    [util.inspect.custom]() { return this.toString() }
}
