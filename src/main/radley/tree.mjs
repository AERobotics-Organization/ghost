import RadleyStatement from './statement'

export default class RadleyTree {
    static makeTree(code, block = [], depth = 0, index = [0]) {
        while (code[index[0]] !== undefined) {
            const statement = new RadleyStatement(code[index[0]])

            if (statement.depth <= depth)
                return

            block.push(statement), index[0]++

            if (statement.isContainer())
                RadleyTree.makeTree(code, statement, statement.depth, index)
        }

        return block
    }
}
