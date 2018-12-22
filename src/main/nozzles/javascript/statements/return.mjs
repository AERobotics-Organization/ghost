import JavaScriptStatement from '.'

export default class JavaScriptReturn extends JavaScriptStatement {
    constructor(statement, meta, registry) {
        super(statement, meta, registry)
    }

    toSource() {
        if (!this.meta) return

        return Object.entries(this.meta)
            .map(function ([method, value]) {
                return this[method](value)
            }, this)

    }
}
