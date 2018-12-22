
export default class RadleyMeta {
    static init(meta) {
        const flatMeta = RadleyMeta.flatten(meta)
        const wovenMeta = RadleyMeta.weave(flatMeta)

        return wovenMeta
    }

    static *weave(meta, snap = {}) {
        if (!meta.length) yield snap
        else {
            const [tag, setting, ticks] = meta[0]
            for (const tick of ticks) {
                snap[tag] = snap[tag] || {}

                snap[tag][setting] = tick
                yield* RadleyMeta.weave(meta.slice(1), snap)
                delete snap[tag][setting]
            }
        }
    }

    static flatten(meta) {
        const groups = []

        for (const tag in meta)
            for (const setting in meta[tag])
                groups.push([tag, setting, meta[tag][setting]])

        return groups
    }
}
