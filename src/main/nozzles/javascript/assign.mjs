import { FOR_LOOP_STUBS } from '../../../resources'

export default class JavaScriptAssign {
    static open(props) { return JavaScriptAssign.toSource(props, false) }
    static close(props) { return JavaScriptAssign.toSource(props, true) }

    static toSource({ meta, statement, registry }, closing) {
        const myMeta = eval(meta)[statement.options.tag]

        if (!myMeta) return !closing ? statement.line : ';'

        let source = ''
        for (const [action, value] of Object.entries(myMeta))
            source += JavaScriptAssign[action](value, statement, registry, closing)

        return source
    }

    static repeat(n, statement, registry, closing) {
        const [variable, value] = statement.line.split('=')

        return closing
            ? ';\n'
            : `let ${variable} = ${new Array(n)
                .fill(value)
                .map(function (loop, i) {
                    return loop.replace(FOR_LOOP_STUBS, function (stub) {
                        if (stub === '^') return i
                        if (stub === '@') return registry.findOrCreate(statement.options.tag + i)
                    })
                })
                .join(statement.options.op)
            }`
    }
}
