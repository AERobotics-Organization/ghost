import { STATEMENT, STATEMENT_DELIMITERS } from '../../resources'

export default class RadleyStatement {
    constructor(raw) {
        const [_, depth, options, line] = raw.match(STATEMENT)

        this.depth = depth.length
        this.options = eval(`(${options})`)
        this.line = line.split(STATEMENT_DELIMITERS[this.options.type])
    }
}
