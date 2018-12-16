import { LOC } from '../../resources/regex'

import RadleyRegistry from './registry'
import RadleyStatement from './statement'
import RadleyLoop from './loop'

export default class RadleySuite {
    constructor({ args, meta, code, nozzle }) {
        this.args = args
        this.meta = meta
        this.nozzle = nozzle
        this.code = code

        this.registry = new RadleyRegistry(this)
    }

    *snapshots(meta = this.meta, snap = {}) {
        if (!meta.length) yield snap

        const [tag, setting, ticks] = meta[0]
        for (const tick of ticks) {
            snap[tag] = snap[tag] || {}

            snap[tag][setting] = tick
            yield* this.snapshots(meta.slice(1), snap)
            delete snap[tag][setting]
        }
    }

    parse(suite, idx = [-1], ctx = this) {

        let line = null
        while ((line = suite.code[++idx[0]]) !== undefined)
            if (RadleyLoop.matchEnd(line))
                return ctx

            else if (RadleyLoop.matchStart(line))
                ctx.children.push(this.parse(suite, idx,
                    new RadleyLoop(suite, line)))

            else if (RadleyStatement.match(line))
                ctx.children.push(
                    new RadleyStatement(suite, line))

        return ctx

    }

    static suite(opts) {
        return new RadleySuite(opts)
    }
}
