import config from '../../../resources/arrow.json'
import Var from '../variable'
import util from 'util'

export default class Block {
    constructor(blocks, global) {
        this.blocks = blocks
        this.scope = {}

        if (!Object.keys(global).length) return

        for (const tag in global)
            this.scope[tag] = new Var({ tag, init: global[tag] })

        for (const block of this.blocks) {
            block.scope = this.scope
            block.inject()
        }
    }

    toString() {
        const scope = Object.keys(this.scope).map(function (tag) { return this.scope[tag].toString() }, this).join(';')
        const block = this.blocks.map(function (block) { return block.toString() }).toString()

        return `${scope}; ${block}`

    }
    [util.inspect.custom]() { return this.toString() }
}
