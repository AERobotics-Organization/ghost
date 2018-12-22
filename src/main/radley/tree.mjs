import RadleyStatement from './statement'

export default class RadleyTree {
    static init(code, block = new Array(), depth = 0, index = [0]) {
        let line, statement
        while ((line = code[index[0]]) !== undefined)
            if ((statement = new RadleyStatement(line)).isBlank())
                index[0]++
            else
                if (statement.depth > depth) {
                    index[0]++
                    block.push(RadleyTree.init(code, [statement], statement.depth, index))
                }

                else if (statement.depth < depth)
                    return block

                else {
                    index[0]++
                    block.push(statement)
                }

        return block
    }

}
