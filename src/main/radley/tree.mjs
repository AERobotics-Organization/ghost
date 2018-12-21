import { LEADING_WHITE_SPACE, BLANK_LINE } from '../../resources'

import RadleyStatement from './statement'

export default class RadleyTree {
    static init(code, statement = new Array()) {

        let line
        while ((line = code.shift()) !== undefined)

            if (!BLANK_LINE.test(line))
                if (RadleyTree.endBlock(line, statement))
                    return statement

                else if (RadleyTree.newBlock(line, statement))
                    statement.push(RadleyTree.init(code, [new RadleyStatement(line)]))

                else if (RadleyTree.sameBlock(line, statement))
                    statement.push(new RadleyStatement(line))


        return statement
    }

    static endBlock(line, context) {
        return line.search(LEADING_WHITE_SPACE) < context.depth
    }

    static newBlock(line, context) {
        return line.search(LEADING_WHITE_SPACE) > context.depth
    }

    static sameBlock(line, context) {
        return line.search(LEADING_WHITE_SPACE) === context.depth
    }
}
