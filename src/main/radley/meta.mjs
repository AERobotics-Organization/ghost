import { LOC } from '../../resources/regex'

import RadleyRegistry from './registry'

export default class RadleyMeta {
    static *snapshots(meta, snap = {}) {
        if (!meta.length) yield snap

        const [tag, setting, ticks] = meta[0]
        for (const tick of ticks) {
            snap[tag] = snap[tag] || {}

            snap[tag][setting] = tick
            yield* RadleyMeta.snapshots(meta.slice(1), snap)
            delete snap[tag][setting]
        }
    }
}
