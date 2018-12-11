import regex from '../../resources/json/regex.json'
import util from 'util'

export default class JSNozzle {
    static fit(suite) {
        const { tree, registry } = super.fit(suite)
        this.code = code.split(eval(regex.NEW_LINE_OR_SEMI))

        const registry = RadleyRegistry.register(this)
        const abstract = RadleyParser.parseTree(this)
    }
}
