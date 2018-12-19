
export default class RadleyMeta {
    static *init(meta, snap = {}) {
        if (!meta.length) yield snap
        else {
            const [tag, setting, ticks] = meta[0]
            for (const tick of ticks) {
                snap[tag] = snap[tag] || {}

                snap[tag][setting] = tick
                yield* this.init(meta.slice(1), snap)
                delete snap[tag][setting]
            }
        }
    }
}
