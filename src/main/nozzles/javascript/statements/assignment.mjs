import { FOR_LOOP_STUBS } from '../../../../resources'

import JavaScriptStatement from '.'

export default class JavaScriptAssignment extends JavaScriptStatement {
    constructor(statement, meta, registry) { super(statement, meta, registry) }

    repeat() {
        return new Array(n)
            .fill(`let ${line}`)
            .map(function (statement, i) {
                return statement.replace(FOR_LOOP_STUBS, function (stub) {
                    if (stub === '@') return registry.findOrCreate(tag + i)
                    else return i
                })
            })
            .join(action)
    }
}
