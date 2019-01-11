export default class RadleySuite {
    constructor({ method, meta }) {
        this.suite = {}
        this.meta = meta
        this.method = method
    }

    static suite(opts) {
        return new RadleySuite(opts)
    }

    call(args) {
        const meta = this.meta(args)
        const func = this.suite[meta] || (this.suite[meta] = this.method(args))

        return func(args)
    }
}
