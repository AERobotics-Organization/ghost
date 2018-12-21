
export default class JavaScriptNozzle {
    static fit({ args, registry, tree, meta }) {
        this.injectTree(registry, tree)
    }

    static injectTree(registry, tree, meta) {
        if (!tree.length) return tree

        // for (const node of tree) {
        //     node.fill(meta)
        //     this.injectTree(registry, node)
        // }

    }
}
