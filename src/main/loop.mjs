import props from '../resources/arrow.json'
import util from 'util'

class Loop {
    constructor(args) {
        this.type = args.type
        this.header = args.header
        this.body = args.body
    }

    toString() { return `${this.type}(${this.header}){${this.body}}` }
    [util.inspect.custom]() { return this.toString() }
}

new Loop({ type: props.LOOP.FOR })
