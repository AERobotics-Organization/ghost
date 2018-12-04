import util from 'util'
import props from '../resources/arrow.json'

class Loop {
    constructor(args) {
        this.type = args.type
        this.header = args.header
        this.body = args.body
    }

    toString() { return `${this.type}(${this.header}){${this.body}}` }
    [util.inspect.custom]() { return this.toString() }
}

new Loop({ type: props.LOOPS.FOR }).over([1, 2, 3, 4, 3, 5, 6, 3, 5])
