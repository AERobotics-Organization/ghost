import config from '../../../resources/arrow.json'
import util from 'util'

export default class LoopGroup {
    constructor(args = {}, loops = []) { }

    static nest(loops) { return new LoopGroup() }
    feed(block) { return new LoopGroup() }

    inject(context) { }
    toString() { }
    [util.inspect.custom]() { return this.toString() }
}
