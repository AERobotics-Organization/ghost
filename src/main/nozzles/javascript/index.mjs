import { LOOP, ASSIGN, RETURN } from '../../../resources'

import JavaScriptLoop from './loop.mjs'
import JavaScriptAssign from './assign.mjs'
import JavaScriptReturn from './return.mjs'

export default class JavaScriptNozzle {
    static makeFunction(args, source) {
        return new Function(...args, source)
    }

    static open(props) {
        switch (props.statement.options.type) {
            case LOOP: return JavaScriptLoop.open(props)
            case ASSIGN: return JavaScriptAssign.open(props)
            case RETURN: return JavaScriptReturn.open(props)
        }
    }

    static close(props) {
        switch (props.statement.options.type) {
            case LOOP: return JavaScriptLoop.close(props)
            case ASSIGN: return JavaScriptAssign.close(props)
            case RETURN: return JavaScriptReturn.close(props)
        }
    }
}
