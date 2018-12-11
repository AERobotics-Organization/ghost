import regex from '../../resources/regex.json'
import registry from '../../resources/registry'
import util from 'util'

export default class RadleyLoop extends RadleyWrapperTag {
    constructor(line) {
        const result = line.match(eval(regex.FOR_LOOP_PARSE))

        this.tag = result[1]
        this.header = result[2]
        this.children = new Array()
    }
}
