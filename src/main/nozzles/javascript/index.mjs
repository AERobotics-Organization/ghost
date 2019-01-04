import { LOOP, ASSIGN, RETURN } from '../../../resources'

import JavaScriptLoop from './loop.mjs'
import JavaScriptAssign from './assign.mjs'
import JavaScriptReturn from './return.mjs'

export default class JavaScriptNozzle {
    static Method(args, source) {
        return new Function(`{${args}}`, source)
    }

    static Node(meta, statement, registry) {
        switch (statement.type) {
            case LOOP: return new JavaScriptLoop(meta, statement, registry)
            case ASSIGN: return new JavaScriptAssign(meta, statement, registry)
            case RETURN: return new JavaScriptReturn(meta, statement, registry)
        }
    }
}
