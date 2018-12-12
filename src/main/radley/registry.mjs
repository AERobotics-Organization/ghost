
export default class RadleyRegistry {
    constructor() {
        this.low = /** Current lowest acceptable unicode */ 97
        this.high = /** Current highest acceptable unicode */ 123
        this.selected = new Set()
        this.registry = new Object()

        /** We bind findOrCreate as it is passed to String.replace */
        this.findOrCreate = this.findOrCreate.bind(this)
    }

    findOrCreate(tag) {
        return this.registry[tag] || (this.registry[tag] = this.nextVar())
    }

    seekVar() {
        return this.low + Math.floor(Math.random() * (this.high - this.low))
    }

    nextVar(variable = null) {
        while (this.selected.has(variable = this.seekVar()));
        this.selected.add(variable)

        return String.fromCharCode(variable)
    }

    register({ args }) {
        for (const arg of args)
            this.registry[arg] = this.nextVar()

        return this
    }
}
