import regex from '../../resources/json/regex.json'

export default class RadleyLoop {
    constructor(line) {

        const [
            _,
            tag,
            header
        ] = line.match(eval(regex.FOR_LOOP_PARSE))

        this.tag = tag
        this.header = header
        this.children = new Array()
    }

    static matchEnd(line) {
        return line.match(eval(regex.FOR_LOOP_CLOSE))
    }

    static matchStart(line) {
        return line.match(eval(regex.FOR_LOOP_MATCH))
    }
}
