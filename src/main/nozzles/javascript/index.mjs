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

                const JavaScriptStatement = JavaScriptNozzle.resolveStatement(node)
                const sourceCode = new JavaScriptStatement(node, meta, registry).toSource()

                console.log(sourceCode)
                console.log('++++++++++++++++++++++++++++++++++')
            }

    }

    static resolveStatement(node) {
        switch (node.options.type) {
            case 'loop': return JavaScriptLoop
            case 'return': return JavaScriptReturn
            case 'assign': return JavaScriptAssignment
        }
    }
}
