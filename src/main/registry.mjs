
class RadleyRegistry {
    constructor() {
        this.low = /** Current lowest acceptable unicode */ 97
        this.high = /** Current highest acceptable unicode */ 123
        this.registry = new Set()
    }

    seekVar() {
        return this.low
            + Math.floor(Math.random() * (this.high - this.low))
    }

    nextVar(variable) {
        while (this.registry.has(variable = this.seekVar()));
        this.registry.add(variable)

        return String.fromCharCode(variable)
    }

    register({ args }) {
        const registry = {}

        for (const arg of args)
            registry[arg] = this.nextVar()

        return registry
    }
}

export default new RadleyRegistry()
