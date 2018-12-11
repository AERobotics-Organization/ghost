import constants from '../resources/json/constants.json'
import regex from '../resources/json/regex.json'

import RadleyLoop from './prims/loop'
import RadleyStatement from './prims/stmt'

export default class RadleyParser {

    static parseTree(suite,
        idx = eval(constants.LOOP_START),
        ctx = eval(constants.RADLEY_CONTEXT)) {

        let line = null
        while ((line = suite.code[++idx[0]]) !== undefined)

            if (RadleyLoop.matchEnd(line))
                return ctx

            else if (RadleyLoop.matchStart(line))
                ctx.children.push(this.parseTree(suite, idx, new RadleyLoop(line)))

            else if (RadleyStatement.match(line))
                ctx.children.push(new RadleyStatement(line))


        return ctx
    }

}
