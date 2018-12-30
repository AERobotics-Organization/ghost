import { FOR_LOOP_STUBS } from '../../../resources'

export default class JavaScriptReturn {
    static open(props) { return JavaScriptReturn.toSource(props, false) }
    static close(props) { return JavaScriptReturn.toSource(props, true) }

    static toSource({ meta, statement, registry }, closing) {
        return !closing ? `return ${statement.line}` : ';'
    }
}
