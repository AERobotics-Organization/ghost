import regex from '../resources/json/regex.json'
import util from 'util'

import RadleyLoop from './prims/loop'
import RadleyVar from './prims/var'

export default class RadleyParser {

    static parseTree(code, idx = [-1], context = { children: [] }) {
        while (++idx[0] < code.length) {

            const taggedLine = this.tag(code[idx[0]])

            if (!taggedLine)
                context = this.parseTree(code, idx, context)

            else context.children.push(taggedLine instanceof RadleyLoop
                ? this.parseTree(code, idx, taggedLine)
                : taggedLine
            )
        }

        return context
    }

    static tag(line) {
        if (line.match(eval(regex.FOR_LOOP_MATCH)))
            return new RadleyLoop(line)

        if (line.match(eval(regex.VAR_DECL_MATCH)))
            return new RadleyVar(line)

        else return null
    }
}
