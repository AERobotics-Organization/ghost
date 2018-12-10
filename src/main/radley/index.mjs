import config from '../../resources/arrow.json'
import util from 'util'

import RadleyParser from './parser'

export default class RadleySuite {
    constructor({ args, meta, code, nozzle }) {
        this.args = args
        this.meta = meta
        this.nozzle = nozzle

        this.code = code.split(eval(config.NEW_LINE_OR_SEMI_REGEX))
        this.tree = RadleyParser.parseTree(this.code)

        this.suite = this.nozzle(this.meta, this.args, this.tree)
    }

    static suite(opts) {
        return new RadleySuite(opts)
    }
}
