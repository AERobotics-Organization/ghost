import { makeCaller, makeRouter } from './utils.mjs'

export default class RadleySuite {
    constructor({ hash, ...tiers }) {
        this.suite = {}
        this.hash = hash
        this.tiers = tiers

        this.call = makeCaller(this.tiers).bind(this)
        this.route = makeRouter(this.hash).bind(this)
    }

    static suite(opts) {
        return new RadleySuite(opts)
    }
}
