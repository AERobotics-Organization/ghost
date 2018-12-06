import Registry from '../../../resources/registry'
import config from '../../../resources/arrow.json'
import util from 'util'

export default class Var {
    constructor(args) {
        this.tag = 'tag' in args ? args.tag : Registry.nextVar()
        this.init = 'init' in args ? args.init : 0
        this.type = 'type' in args ? args.type : config.LET
    }

    join(operation) { }
    inject(context) { }
    toString() { return `${this.type} ${this.tag} = ${JSON.stringify(this.init)}` }
    [util.inspect.custom]() { return this.toString() }
}
