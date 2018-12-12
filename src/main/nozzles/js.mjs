
export default class JSNozzle {
    static fit({ args, meta, registry, tree }) {
        const suite = {}

        for (let i = 1; i < meta.repeat.RL; i++)
            for (let j = 1; j < meta.repeat.AL; j++)
                suite[i][j] =
                    new Function(...args,
                        tree.snapshot(i, j)
                            .map(this.tag)
                            .map(this.translate)
                            .reduce(this.toJavaScript))
        return suite
    }

    static tag(line) { }
    static translate(code) { }
    static toJavaScript() { }


}
