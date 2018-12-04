import Registry from '../../resources/registry'
import util from 'util'

export default class Variable {
    constructor(args) {
        this.name = args.name || Registry.nextVar()
        this.init = args.init || null
    }

    toString() { return `${this.name}` }
    [util.inspect.custom]() { return this.toString() }
}
