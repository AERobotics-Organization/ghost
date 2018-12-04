import Registry from '../../resources/registry'
import config from '../../resources/arrow.json'
import util from 'util'

export default class Variable {
    constructor(args) {
        this.name = args.name || Registry.nextVar()
        this.type = args.type || config.LET
        this.init = args.init || null
    }

    toString() { return `${this.name}` }
    [util.inspect.custom]() { return this.toString() }
}
