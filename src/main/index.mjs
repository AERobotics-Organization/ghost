import { STRINGS, ARGUMENTS, WITH_SUFFIX } from '../resources'

export default class RadleySuite {
    constructor(method) {
        this.suite = {}
        this.method = method
        this.methodString = this.method.toString()

        this.args = this.methodString.match(ARGUMENTS)[1]
        this.methodString = this.methodString
            .replace(STRINGS, '')
            .replace(ARGUMENTS, '')

        this.meta = new Function(this.args, this.metaSource())
    }

    static suite(opts) {
        return new RadleySuite(opts)
    }

    metaSource() {
        return 'return ' + this.args
            .slice(1, -1)
            .split(',')
            .map(function (arg) {
                const statements = this.methodString.match(WITH_SUFFIX(arg.trim()))
                return Array.from(new Set(statements)).join('+')
            }, this)
            .filter(function (metaParam) { return metaParam })
            .join('+')
    }

    call(args) {
        let func, meta = this.meta(args)

        if (this.suite[meta])
            func = this.suite[meta]
        else
            func = (this.suite[meta] = this.method(args))

        return func(args)
    }

}
