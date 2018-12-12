import { FOR_LOOP, FOR_LOOP_PARSE, FOR_LOOP_CLOSE, VARIABLES, FOR_LOOP_VAR } from '../../resources/regex'
import { TAG, HEADER } from '../../resources/constants'

import util from 'util'

import RadleyContainer from './container'

export default class RadleyLoop extends RadleyContainer {
    constructor({ registry, meta }, line) {
        super()

        const results = line.match(FOR_LOOP_PARSE)

        this.tag = results[TAG]
        this.range = meta.repeat[this.tag]
        this.header = results[HEADER].replace(VARIABLES, registry.findOrCreate)
    }

    // toString() {
    //     const inflated = new Array()
    //     for (let i = 1; i < this.meta.repeat[this.tag]; i++)
    //         inflated.push(this.header.replace(FOR_LOOP_VAR, ))

    // }

    // [util.inspect.custom]() { return this.toString() }

    static matchEnd(line) {
        return line.match(FOR_LOOP_CLOSE)
    }

    static matchStart(line) {
        return line.match(FOR_LOOP)
    }
}
