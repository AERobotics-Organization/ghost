import { BLANK_LINE } from '../../resources'

import RadleyStatement from './statement'

export default class RadleyTree {
    static init(code, block = new Array(), depth = 0) {
        let line, statement
        while ((line = code.shift()) !== undefined)
            if (!(statement = new RadleyStatement(line)).isBlank())

                if (statement.depth > depth)
                    block.push(RadleyTree.init(code, [statement], statement.depth))

                else if (statement.depth < depth)
                    return block

                else
                    block.push(statement)

        return block
    }

}
