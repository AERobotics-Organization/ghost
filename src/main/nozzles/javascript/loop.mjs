import { META_STUBS, CLEAN_META } from '../../../resources'

export default class JavaScriptLoop {
    constructor(meta, statement, registry) {
        this.meta = CLEAN_META(meta)
        this.statement = statement
        this.registry = registry
    }

    open() { return this.toSource(true) }
    close() { return this.toSource(false) }

    toSource(opening) {
        return Object
            .keys(this.meta)
            .reduce((function (source, key) {
                const [[action, value]] = Object.entries(this.meta[key])
                return source + this[action].call(this, value)
            }).bind(this), '')
    }

    repeat(n) {
        return new Array(n)
            .fill(`for(let ${this.statement.line}){`)
            .map(function (loop, i) {
                return loop.replace(META_STUBS, function (stub) {
                    if (stub === '^') return i
                    if (stub === '@') return registry.findOrCreate(statement.options.tag + i)
                })
            }, this)
            .join('\n')
            .concat('\n')
    }
}
