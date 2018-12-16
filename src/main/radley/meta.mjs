import util from 'util'

export default class RadleyMeta {

    snapshots(meta, snap = {}) {
        if (!meta.length) { console.log(snap); return }

        const [tag, setting, ticks] = meta[0]
        for (const tick of ticks) {
            snap[tag] = snap[tag] || {}

            snap[tag][setting] = tick
            this.snapshots(meta.slice(1), snap)
            delete snap[tag][setting]
        }
    }
}
