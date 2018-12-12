import RadleyLoop from './prims/loop'
import RadleyStatement from './prims/stmt'

export default class RadleyParseTree {
    constructor() {
        this.children = new Array()
    }

    parse(suite, idx = [-1], ctx = this) {

        let line = null
        while ((line = suite.code[++idx[0]]) !== undefined)
            if (RadleyLoop.matchEnd(line))
                return ctx

            else if (RadleyLoop.matchStart(line))
                ctx.children.push(this.parse(suite, idx,
                    new RadleyLoop(suite, line)))

            else if (RadleyStatement.match(line))
                ctx.children.push(
                    new RadleyStatement(suite, line))

        return ctx
    }

}
