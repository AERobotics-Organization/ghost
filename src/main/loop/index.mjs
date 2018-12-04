import LoopHead from './head'
import LoopBody from './body'

import util from 'util'

class Loop {
    constructor(args) {
        this.head = args.head
        this.body = args.body
    }

    nest(args, context = this) {
        for (let i = 0; i < args.dims.length; i++)
            context = context.body = new Loop({
                head: new LoopHead({ stop: dims[i] }),
                body: new LoopBody({ context })
            })
    }

    toString() { return `${this.head} { ${this.body} }` }
    [util.inspect.custom]() { return this.toString() }
}

export { Loop, LoopBody, LoopHead }
