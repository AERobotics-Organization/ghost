import { STATEMENT, STATEMENT_DELIMITERS, LOOP } from '../../resources'

export default class RadleyStatement extends Array {
    constructor(raw) {
        super()

        const [_, depth, options, line] = raw.match(STATEMENT)

        this.depth = depth.length
        this.options = eval(`(${options})`)
        this.line = line.split(STATEMENT_DELIMITERS[this.options.type])
    }

    isContainer() { return this.options.type === LOOP }
}
