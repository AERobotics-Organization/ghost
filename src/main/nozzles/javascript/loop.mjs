import { FOR_LOOP_STUBS } from '../../../resources'

export default class JavaScriptLoop {
    static open(props) { return JavaScriptLoop.toSource(props, false) }
    static close(props) { return JavaScriptLoop.toSource(props, true) }

    static toSource({ meta, statement, registry }, closing) {
        const myMeta = eval(meta)[statement.options.tag]

        let source = ''
        for (const [action, value] of Object.entries(myMeta))
            source += JavaScriptLoop[action](value, statement, registry, closing)

        return source
    }

    static repeat(n, statement, registry, closing) {
        return closing
            ? new Array(n).fill('}').join('')
            : new Array(n)
                .fill(`for(let ${statement.line}){`)
                .map(function (loop, i) {
                    return loop.replace(FOR_LOOP_STUBS, function (stub) {
                        if (stub === '^') return i
                        if (stub === '@') return registry.findOrCreate(statement.options.tag + i)
                    })
                })
                .join('\n')
                .concat('\n')
    }
}
