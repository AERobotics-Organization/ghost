import { STATEMENT } from '../../resources'

export default class RadleyStatement extends Array {
    constructor(raw) {
        super()

        const [_, depth, options, line] = raw.match(STATEMENT)

        this.depth = depth.length
        this.options = eval(`(${options})`)
        this.line = line.trim()
    }
}
