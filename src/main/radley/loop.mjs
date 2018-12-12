import { FOR_LOOP, FOR_LOOP_PARSE, FOR_LOOP_CLOSE, VARIABLES, FOR_LOOP_STUBS } from '../../resources/regex'
import { TAG, HEADER, AT_SYMBOL, TAB, NEW_LINE } from '../../resources/constants'

import util from 'util'

import RadleyContainer from './container'

export default class RadleyLoop extends RadleyContainer {
    constructor({ registry, meta }, line) {
        super()

        const results = line.match(FOR_LOOP_PARSE)

        this.tag = results[TAG]
        this.header = results[HEADER].replace(VARIABLES, registry.findOrCreate)
        // this.loopVariables = new Array(meta.repeat[this.tag])

        // for (let i = 0; i < this.loopVariables.length; i++)
        //     this.loopVariables[i] = registry.findOrCreate(this.tag + i)
    }

    static matchEnd(line) {
        return line.match(FOR_LOOP_CLOSE)
    }

    static matchStart(line) {
        return line.match(FOR_LOOP)
    }

    // placeholders(loop, index) {
    //     return this.header.replace(FOR_LOOP_STUBS, function (match) {
    //         return match === AT_SYMBOL ? loop : index
    //     })
    // }

    // toString() {
    //     return this.loopVariables
    //         .map(this.placeholders.bind(this))
    //         .concat(super.toString())
    // }
    // [util.inspect.custom]() { return this.toString() }


}
