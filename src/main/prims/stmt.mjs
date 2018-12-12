import { STATEMENT_PARSE, STATEMENT, VARIABLES } from '../../resources/regex'
import { EMPTY_STR, COMMA } from '../../resources/constants'

export default class RadleyStatement {
    constructor({ registry }, line) {
        const [_0, _1, refs, stmt] = line.match(STATEMENT_PARSE)

        this.refs = (refs || EMPTY_STR).split(COMMA)
        this.stmt = stmt.trim().replace(VARIABLES, registry.findOrCreate)
    }

    static match(line) {
        return line.match(STATEMENT)
    }

}
