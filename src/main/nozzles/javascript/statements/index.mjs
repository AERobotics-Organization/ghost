
export default class JavaScriptStatement {
    constructor({ options: { tag, type, action }, line }, meta, registry) {
        this.tag = tag

        this.type = type
        this.line = line
        this.meta = meta[this.tag]

        this.action = action
        this.registry = registry

        console.log(this.type)
        console.log(this.line)
    }
}
