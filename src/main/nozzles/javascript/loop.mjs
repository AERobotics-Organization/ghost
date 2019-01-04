import { META_STUBS, CLEAN_META } from '../../../resources'

export default class JavaScriptLoop {
    constructor(meta, statement, registry) {
        this.meta = CLEAN_META(meta)
    }

    static open(meta, statement, registry) {
        return JavaScriptLoop.toSource(meta, statement, registry, false)
    }

    static close(meta, statement, registry) {
        return JavaScriptLoop.toSource(meta, statement, registry, true)
    }

    static toSource(meta, statement, registry, closing) {
        const myMeta = CLEAN_META(meta)

        let source = ''
        for (const [action, value] of Object.entries(myMeta))
            source += JavaScriptLoop[action](value, statement, registry, closing)

        return source
    }

    static expand(statement, registry, closing) {

    }

    static repeat(n, statement, registry, closing) {
        return closing
            ? new Array(n).fill('}').join('')
            : new Array(n)
                .fill(`for(let ${statement.line}){`)
                .map(function (loop, i) {
                    return loop.replace(META_STUBS, function (stub) {
                        if (stub === '^') return i
                        if (stub === '@') return registry.findOrCreate(statement.options.tag + i)
                    })
                })
                .join('\n')
                .concat('\n')
    }
}
