import JavaScriptLoop from './statements/loop'

export default class JavaScriptNozzle {
    static fit(radley) {
        for (const instance of radley.meta) {
            if (instance.RL.repeat < 4) continue
            new Function(...radley.args,
                JavaScriptNozzle.spray(
                    radley.registry,
                    radley.tree,
                    instance
                ))
            break
        }
    }

    static spray(registry, tree, meta, fn = '') {

        for (const node of tree)
            if (node.constructor === Array)
                JavaScriptNozzle.spray(registry, node, meta)
            else {
                // console.log('node', node)
                // console.log('meta', meta[node.options.tag])
                const [[action, count]] = Object.entries(meta[node.options.tag])

                if (node.options.type === 'loop')
                    console.log(JavaScriptLoop[action](node.options.tag, node.line, registry, count))

                console.log('++++++++++++++++++++++++++++++++++')
            }

    }
}
