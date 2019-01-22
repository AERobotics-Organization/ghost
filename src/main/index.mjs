import { makeCaller, makeRouter, wrap } from './utils.mjs'

export default class RadleySuite {
    constructor({ router, tractable, methods: { generic, optimized } }) {
        this.suite = {}
        this.tractable = tractable

        const routerSource = router.toString()
        this.call = makeCaller(routerSource).bind(this)
        this.route = makeRouter(routerSource).bind(this)

        this.generic = wrap(generic).bind(this)
        this.optimized = wrap(optimized).bind(this)
    }

    static suite(opts) {
        return new RadleySuite(opts)
    }
}
