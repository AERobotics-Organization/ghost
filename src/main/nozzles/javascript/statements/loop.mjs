import { FOR_LOOP_STUBS } from '../../../../resources'

import JavaScriptStatement from '.'

export default class JavaScriptLoop extends JavaScriptStatement {
    constructor(statement, meta, registry) {
        super(statement, meta, registry)
    }

    repeat(n) {
        return new Array(n)
            .fill(`for(let @ = 0; ${this.line[0]}; @++){`)
            .map(function (loop, i) {
                return loop.replace(FOR_LOOP_STUBS, (function (stub) {
                    if (stub === '@') return this.registry.findOrCreate(this.tag + i)
                    else return i
                }).bind(this))
            }, this)
    }

    toSource() {
        if (!this.meta) return

        return Object.entries(this.meta)
            .map(function ([method, value]) {
                return this[method](value)
            }, this)

    }
}
