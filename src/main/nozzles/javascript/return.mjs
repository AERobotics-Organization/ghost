// import { } from '../../../resources'

export default class JavaScriptReturn {
    static open(meta, statement, registry) {
        return JavaScriptReturn.toSource(meta, statement, registry, false)
    }

    static close(meta, statement, registry) {
        return JavaScriptReturn.toSource(meta, statement, registry, true)
    }

    static toSource(meta, statement, registry, closing) {
        return !closing ? `return ${statement.line}` : ';'
    }
}
