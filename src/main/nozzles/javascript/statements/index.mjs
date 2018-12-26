import { FOR_LOOP_STUBS, AT_SYMBOL, CARROT_SYMBOL, LOOP } from '../../../resources'

import JavaScriptLoop from './loop'
import JavaScriptReturn from './return'
import JavaScriptAssignment from './assignment'

export default class JavaScriptNode {
    constructor(radleyNode, meta, registry) {
        this.radleyNode = radleyNode
        this.registry = registry
        this.meta = meta

        this.expand = this.expand.bind(this)
        this.transform = this.transform.bind(this)
    }

    open() {
        switch (this.radleyNode.options.type) {
            case LOOP:
                JavaScriptLoop.open(this.radleyNode, this.meta, this.registry)
        }

    }
    close() { }

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
