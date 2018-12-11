import regex from '../../resources/json/regex.json'
import util from 'util'

export default class RadleyLoop {
    constructor(line) {
        const [_, tag, header] = line.match(eval(regex.FOR_LOOP_PARSE))

        this.tag = tag
        this.header = header
        this.children = new Array()
    }
}
