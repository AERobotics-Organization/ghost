import { makeCaller, makeRouter, wrap } from './utils.mjs'

export default class RadleySuite {
    constructor({ router, tractable, generic, optimized }) {
        this.suite = {}
        this.tractable = tractable

        this.call = makeCaller(router.toString(), this.args).bind(this)
        this.route = makeRouter(router.toString(), this.args).bind(this)

        this.generic = wrap(generic).bind(this)
        this.optimized = wrap(optimized).bind(this)
    }

    static suite(opts) {
        return new RadleySuite(opts)
    }
}
