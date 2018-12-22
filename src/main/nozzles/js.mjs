
export default class JavaScriptNozzle {
    static fit(radley) {
        for (const instance of radley.meta) {
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
                console.log('node', node)
                console.log('meta', node.inject(meta))
                console.log('++++++++++++++++++++++++++')

                JavaScriptNozzle.scribe(node.type)
            }

    }

    static scribe(type, ...args) {
        switch (type) {
            case 'loop':
                return new JavaScriptLoop(...args)
        }
    }
}
