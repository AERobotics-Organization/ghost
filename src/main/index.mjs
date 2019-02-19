import { makeCaller, makeRouter, wrap } from './utils.mjs'

export default class RadleySuite {
    constructor({ ...tiers, hash }) {
        this.suite = {}
        this.hash = hash
        this.tiers = tiers

        this.call = makeCaller(this.tiers)
        this.route = makeRouter(this.hash)
    }

    static suite(opts) {
        return new RadleySuite(opts)
    }
}
