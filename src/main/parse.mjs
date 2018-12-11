import regex from '../resources/json/regex.json'
import constants from '../resources/json/constants.json'

import util from 'util'

import RadleyLoop from './prims/loop'
import RadleyStatement from './prims/stmt'

export default class RadleyParser {

    static parseTree(code, idx = [-1], context = { children: [] }) {
        while (++idx[0] < code.length) {

            const line = this.tag(code[idx[0]])

            if (!line) continue

            else if (line instanceof RadleyLoop)
                context.children.push(this.parseTree(code, idx, line))

            else if (line instanceof RadleyStatement)
                context.children.push(line)

            else if (line === constants.LOOP_END)
                return context
        }

        return context
    }

    static tag(line) {
        if (line.match(eval(regex.FOR_LOOP_MATCH)))
            return new RadleyLoop(line)

        if (line.match(eval(regex.STATEMENT_MATCH)))
            return new RadleyStatement(line)

        if (line.match(eval(regex.FOR_LOOP_CLOSE)))
            return line.trim()

        else return null
    }
}
