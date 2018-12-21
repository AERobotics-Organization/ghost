import { STATEMENT } from '../../resources/regex'

export default class RadleyStatement extends Array {
    constructor(raw) {
        super()

        const [_, depth, options, line] = raw.match(STATEMENT)

        this.depth = depth.length
        this.options = options
        this.line = line.trim()

        console.log(this)
    }
}
