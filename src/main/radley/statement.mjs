import { STATEMENT, LOOP, RETURN, ASSIGN } from '../../resources'

export default class RadleyStatement extends Array {
    constructor(raw) {
        super()

        const [_, depth, line] = raw.match(STATEMENT)
        const [code, tags] = line.split(':').reverse()

        this.tags = tags && tags.trim().split(',')
        this.code = code && code.trim()
        this.depth = depth.length

        if (code.indexOf(';') > 0)
            this.type = LOOP

        else if (code.indexOf('=') > 0)
            this.type = ASSIGN

        else if (code.indexOf('return') > 0)
            this.type = RETURN
    }

    isContainer() { return this.type === LOOP }
}
