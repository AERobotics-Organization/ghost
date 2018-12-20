
export default class JavaScriptNozzle {
    static fit({ args, registry, tree, meta }) {
        const suite = new Object()

        for (const setting of meta)
            console.log(setting)
    }
}
