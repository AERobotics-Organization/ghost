import { STATEMENT, LOOP } from '../../resources'

export default class RadleyStatement extends Array {
    constructor(raw) {
        super()

        const [_, depth, options, line] = raw.match(STATEMENT)

        this.line = line
        this.options = eval(`(${options})`)
        this.depth = depth.length
    }

    isContainer() { return this.options.type === LOOP }
}
