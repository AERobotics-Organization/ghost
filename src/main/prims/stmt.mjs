import constants from '../../resources/json/constants.json'
import regex from '../../resources/json/regex.json'

import util from 'util'

export default class RadleyStatement {
    constructor(line) {
        const [_, hasRefs, refs, statement] = line.match(eval(regex.STATEMENT_PARSE))

        this.line = statement.trim()

        if (hasRefs)
            this.refs = refs.split(',')
    }
}
