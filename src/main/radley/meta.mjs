
export default class RadleyMeta {
    static *makeSnaps(meta, snap = {}) {
        if (!meta.length) yield snap

        const [tag, setting, ticks] = meta[0]
        for (const tick of ticks) {
            snap[tag] = snap[tag] || {}

            snap[tag][setting] = tick
            yield* this.makeSnaps(meta.slice(1), snap)
            delete snap[tag][setting]
        }
    }
}
