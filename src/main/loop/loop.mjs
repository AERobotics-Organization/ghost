import util from 'util'

export default class Loop {
    constructor(args) {
        this.head = args.head
        this.body = args.body
    }

    toString() { return `${this.head} { ${this.body} }` }
    [util.inspect.custom]() { return this.toString() }
}


