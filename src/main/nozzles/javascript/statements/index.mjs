import { FOR_LOOP_STUBS, AT_SYMBOL, CARROT_SYMBOL } from '../../../../resources'

export default class JavaScriptStatement {
    constructor({ options: { tag, type, operation, modifier }, line }, meta, registry) {
        this.tag = tag

        this.type = type
        this.line = line
        this.meta = meta[this.tag]

        this.modifier = modifier
        this.operation = operation
        this.registry = registry

        this.expand = this.expand.bind(this)
        this.transform = this.transform.bind(this)
    }

    expand(statement, i) {
        return statement.replace(FOR_LOOP_STUBS, (function (stub) {

            if (stub === CARROT_SYMBOL)
                return i

            if (stub === AT_SYMBOL)
                return this.registry.findOrCreate(this.tag + i)

        }).bind(this))
    }

    transform([transformation, value]) {
        return this[transformation](value)
    }
}
