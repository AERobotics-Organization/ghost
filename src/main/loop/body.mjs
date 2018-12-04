
import util from 'util'
import props from '../resources/arrow.json'

export default class LoopBody {
    constructor(args) {
        this.context = args.context
        this.logic = args.logic
    }

    toString() { }
    [util.inspect.custom]() { return this.toString() }
}
