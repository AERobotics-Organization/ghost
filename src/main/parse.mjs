import constants from '../resources/json/constants.json'
import regex from '../resources/json/regex.json'

import RadleyLoop from './prims/loop'
import RadleyStatement from './prims/stmt'

export default class RadleyParser {

    static parseTree(code,
        idx = eval(constants.LOOP_START),
        ctx = eval(constants.RADLEY_CONTEXT)) {

        let i = null
        while ((i = ++idx[0]) < code.length)

            if (RadleyLoop.matchEnd(code[i]))
                return ctx

            else if (RadleyLoop.matchStart(code[i]))
                ctx.children.push(this.parseTree(code, idx, new RadleyLoop(code[i])))

            else if (RadleyStatement.match(code[i]))
                ctx.children.push(new RadleyStatement(code[i]))


        return ctx
    }

}
