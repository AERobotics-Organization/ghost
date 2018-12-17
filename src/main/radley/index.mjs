import { LOC } from '../../resources/regex'

import RadleyRegistry from './registry'

export default class RadleySuite {
    constructor({ args, meta, code }) {
        this.registry = new RadleyRegistry()
        this.args = this.registry.register(args)

        this.code = code.split(LOC)

        this.meta = RadleyMeta.snapshots(meta)
        this.tree = RadleyTree.forrest(this)
    }

    *snapshots(meta, snap = {}) {
        if (!meta.length) yield snap

        const [tag, setting, ticks] = meta[0]
        for (const tick of ticks) {
            snap[tag] = snap[tag] || {}

            snap[tag][setting] = tick
            yield* this.snapshots(meta.slice(1), snap)
            delete snap[tag][setting]
        }
    }

    

    static suite(opts) {
        return new RadleySuite(opts)
    }
}
