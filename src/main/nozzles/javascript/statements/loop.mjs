import { FOR_LOOP_STUBS } from '../../../../resources'

export default class JavaScriptLoop {
    static repeat(tag, line, registry, n) {
        return new Array(n)
            .fill(`for(let @ = 0; ${line}; @++){`)
            .map(function (loop, i) {
                return loop.replace(FOR_LOOP_STUBS, function (stub) {
                    if (stub === '@')
                        return registry.findOrCreate(tag + i)
                    else return i
                })
            })
    }
}