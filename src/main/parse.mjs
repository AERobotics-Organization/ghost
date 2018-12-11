import constants from '../resources/json/constants.json'
import regex from '../resources/json/regex.json'

import RadleyLoop from './prims/loop'
import RadleyStatement from './prims/stmt'

export default class RadleyParser {

    static parseTree(code,
        idx = eval(constants.LOOP_START),
        ctx = eval(constants.RADLEY_CONTEXT)) {

        while (++idx[0] < code.length) {
            const line = code[idx[0]]

            if (RadleyLoop.matchEnd(line))
                return ctx

            else if (RadleyLoop.matchStart(line))
                ctx.children.push(this.parseTree(code, idx, new RadleyLoop(line)))

            else if (RadleyStatement.match(line))
                ctx.children.push(new RadleyStatement(line))
        }

        return ctx
    }

}
