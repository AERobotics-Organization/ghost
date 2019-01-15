export default class RadleySuite {
    constructor({ meta, optimized }) {
        this.suite = {}

        this.meta = meta
        this.optimized = optimized
    }

    static suite(opts) {
        return new RadleySuite(opts)
    }

    call(args) {
        const meta = this.meta(args)
        const func = this.suite[meta] || (this.suite[meta] = this.optimized(args))

        return func(args)
    }
}
