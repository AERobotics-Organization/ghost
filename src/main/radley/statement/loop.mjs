import { FOR_LOOP, FOR_LOOP_PARSE, FOR_LOOP_CLOSE, VARIABLES, FOR_LOOP_STUBS } from '../../resources/regex'
import { TAG, STMT, AT_SYMBOL, TAB, NEW_LINE } from '../../resources/constants'

import util from 'util'

import RadleyContainer from './container'

export default class RadleyLoop extends RadleyContainer {
    constructor({ registry }, line) {
        super()

        const results = line.match(FOR_LOOP_PARSE)

        this.tag = results[TAG]
        this.header = results[STMT].replace(VARIABLES, registry.findOrCreate)
    }

    static matchEnd(line) {
        return line.match(FOR_LOOP_CLOSE)
    }

    static matchStart(line) {
        return line.match(FOR_LOOP)
    }

}
