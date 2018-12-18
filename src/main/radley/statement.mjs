import { STATEMENT_PARSE, STATEMENT, VARIABLES } from '../../resources/regex'
import { EMPTY_STR, COMMA, TAG, STMT } from '../../resources/constants'

import util from 'util'

export default class RadleyStatement {
    constructor({ registry }, line) {
        const result = line.match(STATEMENT_PARSE)

        this.tag = result[TAG]
        this.stmt = result[STMT].trim().replace(VARIABLES, registry.findOrCreate)
    }



    // const results = line.match(FOR_LOOP_PARSE)

    // this.tag = results[TAG]
    // this.header = results[STMT].replace(VARIABLES, registry.findOrCreate)
}
