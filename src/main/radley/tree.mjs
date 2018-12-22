import RadleyStatement from './statement'

export default class RadleyTree {
    static init(code, block = new Array(), depth = 0, index = [0]) {
        while (code[index[0]] !== undefined) {
            const statement = new RadleyStatement(code[index[0]])

            if (statement.depth < depth)
                return block

            ++index[0]

            if (statement.depth === depth)
                block.push(statement)
            else
                block.push(RadleyTree.init(code, [statement], statement.depth, index))
        }

        return block
    }

}
