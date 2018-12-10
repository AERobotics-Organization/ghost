import config from '../resources/arrow.json'
import util from 'util'

import RadleyParser from './parser'

export default class RadleySuite {
    constructor({ args, meta, code }) {
        this.args = args
        this.meta = meta
        this.code = code.split(eval(config.NEW_LINE_OR_SEMI_REGEX))
        this.tree = RadleyParser.parseTree(this.code)
    }
    static suite(opts) {
        console.log(util.inspect(new RadleySuite(opts), false, null, true /* enable colors */))
    }
}
