import LoopHead from './head'
import LoopBody from './body'

import util from 'util'

class Loop {
    constructor(args) {
        this.type = args.type
        this.head = args.head
        this.body = args.body
    }

    nest(args, context = this) {
        if (args.dims)
            for (let i = 0; i < dims.length; i++)
                context = context.body = new Loop({
                    type: context.type,
                    head: new LoopHead({ end: dims[i] })
                })



    }

    toString() { return `${this.type} ( ${this.head} ) { ${this.body} }` }
    [util.inspect.custom]() { return this.toString() }
}

export { Loop, LoopBody, LoopHead }
