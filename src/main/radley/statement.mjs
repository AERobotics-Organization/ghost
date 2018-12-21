import { STATEMENT } from '../../resources/regex'

export default class RadleyStatement extends Array {
    constructor(raw) {
        super()

        const [_, options, line] = raw.trim().match(STATEMENT)

        this.line = line.trim()
        this.options = options.trim()

        console.log(this)
    }
}
