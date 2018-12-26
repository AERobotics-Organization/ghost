import { NEW_LINE } from '../../../resources'

import JavaScriptStatement from '.'

export default class JavaScriptLoop extends JavaScriptStatement {
    constructor(statement, meta, registry) {
        super(statement, meta, registry)

        const [init, check, delta] = this.line
        this.init = init
        this.check = check
        this.delta = delta
    }

    repeat(n) {
        return new Array(n)
            .fill(this.toString())
            .map(this.expand)
            .join(NEW_LINE)
    }

    toString(expression) {
        return expression || `for(let ${this.init}; ${this.check}; ${this.delta}){`
    }

    toSource() {
        if (!this.meta)
            return this.toString()

        const newExpression = Object
            .entries(this.meta)
            .map(this.transform)
            .pop()

        return this.toString(newExpression)
    }
}
