import config from '../../../resources/arrow.json'
import util from 'util'

export default class Suite {
    constructor(method, args) { }

    toString() { }
    [util.inspect.custom]() { return this.toString() }
}
