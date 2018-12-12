import { FOR_LOOP, FOR_LOOP_PARSE, FOR_LOOP_CLOSE, VARIABLES } from '../../resources/regex'

export default class RadleyLoop {
    constructor({ registry }, line) {
        const [full, tag, header] = line.match(FOR_LOOP_PARSE)

        this.tag = tag
        this.header = header.replace(VARIABLES, registry.findOrCreate)
        this.children = new Array()
    }

    static matchEnd(line) {
        return line.match(FOR_LOOP_CLOSE)
    }

    static matchStart(line) {
        return line.match(FOR_LOOP)
    }
}
