import config from '../../../resources/arrow.json'
import util from 'util'

export default class Block {
    constructor(scope = {}, code = []) { }

    toString() { }
    [util.inspect.custom]() { return this.toString() }
}
