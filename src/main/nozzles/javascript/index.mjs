import JavaScriptLoop from './statements/loop'
import JavaScriptReturn from './statements/return'
import JavaScriptAssignment from './statements/assignment'

export default class JavaScriptNozzle {
    static fit({ registry, tree, args, meta }) {
        for (const instance of meta) {
            if (instance.RL.repeat < 4) continue
            new Function(...args, JavaScriptNozzle.spray(registry, tree, instance))
            break
        }
    }

    static spray(registry, tree, meta) {

        for (const node of tree)
            if (node.constructor === Array)
                JavaScriptNozzle.spray(registry, node, meta)
            else {

                JavaScriptNozzle.resolve(node, meta, registry)

                console.log('++++++++++++++++++++++++++++++++++')
            }

    }

    static resolve(node, meta, registry) {
        switch (node.options.type) {
            case 'loop': return new JavaScriptLoop(node, meta, registry)
            case 'return': return new JavaScriptReturn(node, meta, registry)
            case 'assign': return new JavaScriptAssignment(node, meta, registry)
        }
    }
}
