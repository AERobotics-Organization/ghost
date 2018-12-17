import RadleyStatement from './statement'
import RadleyLoop from './loop'

export default class RadleyParseTree {
    parseTrees(context, block, line = null) {
        
        while ((line = context.code.next().value) !== undefined)
            if (RadleyLoop.matchEnd(line))
                return block

            else if (RadleyLoop.matchStart(line))
                block.children.push(this.parse(context, new RadleyLoop(context, line)))

            else if (RadleyStatement.match(line))
                block.children.push(new RadleyStatement(context, line))


        return block

    }
}
