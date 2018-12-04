import Loop from './loop'
import LoopHead from './head'

export default class LoopGroup {
    constructor(args) {
        this.nested = args.nested
        this.dims = args.dims
        this.context = {}

        this.nest(this.dims, this.context)
    }

    nest(dims, context) {
        if (!dims.length) return context

        context.body = this.nest(dims.slice(1), new Loop({
            head: new LoopHead({ stop: dims[0] })
        }))

        return context
    }
}
