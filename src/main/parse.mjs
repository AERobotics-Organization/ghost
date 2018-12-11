import regex from '../resources/json/regex.json'
import util from 'util'

import RadleyLoop from './prims/loop'
import RadleyStatement from './prims/stmt'

export default class RadleyParser {

    static parseTree(code, idx = [-1], context = { children: [] }) {
        while (++idx[0] < code.length) {

            const taggedLine = this.tag(code[idx[0]])

            if (!taggedLine)
                context = this.parseTree(code, idx, context)

            else context.children.push(!(taggedLine instanceof RadleyStatement)
                ? this.parseTree(code, idx, taggedLine)
                : taggedLine
            )
        }

        return context
    }

    static tag(line) {
        if (line.match(eval(regex.FOR_LOOP_MATCH)))
            return new RadleyLoop(line)

        if (line.match(eval(regex.STATEMENT_MATCH)))
            return new RadleyStatement(line)

        else return null
    }
}
