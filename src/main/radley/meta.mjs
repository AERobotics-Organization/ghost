
export default class RadleyMeta {
    static make(meta) {
        const flatMeta = RadleyMeta.flatten(meta)
        const wovenMeta = RadleyMeta.weave(flatMeta)

        return wovenMeta
    }

    static *weave(meta, snapshot = {}) {
        if (!meta.length) yield snapshot
        else {
            const [tag, setting, ticks] = meta[0]
            for (const tick of ticks) {
                snapshot[tag] = snapshot[tag] || {}

                snapshot[tag][setting] = tick
                yield* RadleyMeta.weave(meta.slice(1), snapshot)
                delete snapshot[tag][setting]
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
