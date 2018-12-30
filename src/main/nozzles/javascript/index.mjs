import { LOOP, ASSIGN, RETURN } from '../../../resources'

import JavaScriptLoop from './loop.mjs'
import JavaScriptAssign from './assign.mjs'
import JavaScriptReturn from './return.mjs'

export default class JavaScriptNozzle {
    static toFunction(args, source) {
        return new Function(...args, source)
    }

    static open(meta, statement, registry) {
        switch (statement.options.type) {
            case LOOP: return JavaScriptLoop.open(meta, statement, registry)
            case ASSIGN: return JavaScriptAssign.open(meta, statement, registry)
            case RETURN: return JavaScriptReturn.open(meta, statement, registry)
        }
    }

    static close(meta, statement, registry) {
        switch (statement.options.type) {
            case LOOP: return JavaScriptLoop.close(meta, statement, registry)
            case ASSIGN: return JavaScriptAssign.close(meta, statement, registry)
            case RETURN: return JavaScriptReturn.close(meta, statement, registry)
        }
    }
}
