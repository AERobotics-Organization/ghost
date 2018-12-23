import JavaScriptStatement from '.'

export default class JavaScriptReturn extends JavaScriptStatement {
    constructor(statement, meta, registry) {
        super(statement, meta, registry)

        const [expression] = this.line
        this.expression = expression
    }

    toString() {
        return `return ${this.expression}`
    }

    toSource() {
        if (!this.meta) return this.toString()
    }
}
