import JavaScriptStatement from '.'

export default class JavaScriptAssignment extends JavaScriptStatement {
    constructor(statement, meta, registry) {
        super(statement, meta, registry)

        const [variable, expression] = this.line
        this.modifier = this.modifier ? 'let' : ''
        this.variable = variable
        this.expression = expression
    }

    repeat(n) {
        return new Array(n)
            .fill(this.expression)
            .map(this.expand)
            .join(this.operation)
    }

    toString(expression) {
        return `${this.modifier} ${this.variable} = ${expression || this.expression}`
    }

    toSource() {
        if (!this.meta) return this.toString()

        const newExpression = Object
            .entries(this.meta)
            .map(this.transform)

        return this.toString(newExpression)
    }
}
