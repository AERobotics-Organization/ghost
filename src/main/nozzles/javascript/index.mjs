export default class JavaScriptNozzle {
    static toFunction(meta, { registry, tree, args }) {
        return new Function(...args, RadleyNozzle.toSource(meta, tree, registry))
    }

    static toSource(meta, tree, registry, source = '') {
        for (const radleyNode of tree) {
            const JSNode = new JavaScriptNode(radleyNode, meta, registry)
            source += JSNode.open()

            if (radleyNode.length)
                source += this.toSource(meta, JSNode, source)

            source += JSNode.close()
        }

        return source
    }
}
