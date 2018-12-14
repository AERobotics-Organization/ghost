import RadleyLoop from './loop'
import RadleyStatement from './statement'
import RadleyContainer from './container'

export default class RadleyParseTree extends RadleyContainer {
    constructor() { super() }

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
