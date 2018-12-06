
import config from '../../../resources/arrow.json'
import util from 'util'

import Block from '../block'

export default class Method extends Block {
    constructor(args = [], blocks = [], close = []) {
        super(blocks, args)
    }

    toString() { }
    [util.inspect.custom]() { return this.toString() }
}
