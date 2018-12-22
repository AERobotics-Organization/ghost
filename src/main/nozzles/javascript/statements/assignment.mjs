import { FOR_LOOP_STUBS } from '../../../../resources'

import JavaScriptStatement from '.'

export default class JavaScriptAssignment extends JavaScriptStatement {
    constructor(statement, meta, registry) {
        super(statement, meta, registry)

        const [variable, expression] = this.line
        this.variable = variable
        this.expression = expression
    }

    repeat(n) {
        return new Array(n)
            .fill(`${this.expression}`)
            .map(function (statement, i) {
                return statement.replace(FOR_LOOP_STUBS, (function (stub) {
                    if (stub === '@') return this.registry.findOrCreate(this.tag + i)
                    else return i
                }).bind(this))
            }, this)
            .join(this.action)
    }

    toSource() {
        if (!this.meta) return

        return Object.entries(this.meta)
            .map(function ([method, value]) {
                return this[method](value)
            }, this)

    }
}
