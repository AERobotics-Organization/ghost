import { STATEMENT, BLANK_LINE } from '../../resources'

export default class RadleyStatement {
    constructor(raw) {

        if (BLANK_LINE.test(raw)) return

        const [_, depth, options, line] = raw.match(STATEMENT)

        this.depth = depth.length
        this.options = eval(`(${options})`)
        this.line = line.trim()
    }

    isBlank() {
        return !('depth' in this && 'options' in this && 'line' in this)
    }
}
