import { STATEMENT, STATEMENT_DELIMITERS, LOOP } from '../../resources'

export default class RadleyStatement extends Array {
    constructor(raw) {
        super()

        const [_, depth, type, line] = raw.match(STATEMENT)

        this.type = type
        this.depth = depth.length
        this.line = line.split(STATEMENT_DELIMITERS[this.type])
    }

    isContainer() { return this.type === LOOP }
}
