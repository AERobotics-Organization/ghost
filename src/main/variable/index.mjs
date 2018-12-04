import Registry from '../../resources/registry'
import util from 'util'

export default class Variable {
    constructor(args) {
        this.name = args.name || Registry.nextVar()
        this.value = args.value
    }

    toString() { return `${this.name}` }
    [util.inspect.custom]() { return this.toString() }
}
