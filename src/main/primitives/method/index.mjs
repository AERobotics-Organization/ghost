import config from '../../../resources/arrow.json'
import util from 'util'

export default class Method {
    constructor(args = [], code = []) { }

    toString() { }
    [util.inspect.custom]() { return this.toString() }
}
