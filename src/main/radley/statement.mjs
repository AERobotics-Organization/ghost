import { STATEMENT_PARSE, STATEMENT, VARIABLES } from '../../resources/regex'
import { EMPTY_STR, COMMA, TAG, STMT } from '../../resources/constants'

import util from 'util'

export default class RadleyStatement {
    constructor({ registry }, line) {
        const result = line.match(STATEMENT_PARSE)

        this.tag = result[TAG]
        this.stmt = result[STMT].trim().replace(VARIABLES, registry.findOrCreate)
    }

    static match(line) {
        return line.match(STATEMENT)
    }
    // [util.inspect.custom]() { return this.toString() }
}
