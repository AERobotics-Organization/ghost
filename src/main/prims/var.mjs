import constants from '../../resources/json/constants.json'
import regex from '../../resources/json/regex.json'

import util from 'util'

export default class RadleyVar {
    constructor(line) {
        const [_, hasRefs, refs, statement] = line.match(eval(regex.VAR_DECL_PARSE))

        if (hasRefs)
            this.refs = refs.split(',')

        this.line = statement.trim()
    }
}
