import config from '../../../resources/arrow.json'
import util from 'util'

export default class LoopGroup {
    constructor(args = {}, loops = []) {
        this.over = args.over
        this.loops = loops
    }

    static nest(loops) { }
    feed(block) { }
    inject(context) { }

    toString() { }
    [util.inspect.custom]() { return this.toString() }
}
