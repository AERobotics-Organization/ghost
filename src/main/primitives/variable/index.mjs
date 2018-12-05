import Registry from '../../../resources/registry'
import config from '../../../resources/arrow.json'
import util from 'util'

export default class Var {
    constructor(args) {
        this.name = args.name || Registry.nextVar()
        this.type = args.type || config.LET
        this.init = args.init || 0
    }

    toString() { return `${this.name}` }
    [util.inspect.custom]() { return this.toString() }
}
