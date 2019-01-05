
export default class RadleySuite {
    constructor({ make, backup, meta, failover }) {
        this.suite = {}

        this.meta = meta
        this.make = make
        this.backup = backup
        this.failover = failover
    }

    static suite(opts) {
        return new RadleySuite(opts)
    }

    call(args) {
        let func, meta = this.meta(args)

        if (this.failover(args))
            func = this.backup

        else if (this.suite[meta])
            func = this.suite[meta]

        else
            func = (this.suite[meta] = this.make(args))

        return func(args)
    }

}
