
export default class RadleyNozzle {
    constructor(stream) {
        this.stream = stream
        this.program = program
    }

    fit() {
        const suite = {}

        for (const meta of this.stream.meta)
            suite[instance] = new this.program(...this.stream.args, this.inject(meta))

        return suite
    }

    inject(meta, tree = this.stream.tree, source = '') {
        for (const branch of tree) {
            const node = new Node(branch, meta, this.stream.registry)

            source += node.open()

            if (node.length)
                this.inject(meta, node, source)

            source += node.close()
        }

        return source
    }
}
