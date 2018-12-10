import config from '../../resources/arrow.json'
import util from 'util'

import RadleyLoop from './loop'
import RadleyVar from './var'

export default class RadleyParser {

    static parseTree(code, idx = [-1], context = { children: [] }) {
        while (++idx[0] < code.length) {

            const taggedLine = this.tag(code[idx[0]])

            if (!taggedLine)
                context = this.parseTree(code, idx, context)

            else if (taggedLine.isWrapper)
                context.children.push(this.parseTree(code, idx, taggedLine))

            else
                context.children.push(taggedLine)
        }

        return context
    }

    static tag(line) {
        if (line.match(eval(config.FOR_LOOP_MATCH_REGEX)))
            return new RadleyLoop(line)

        if (line.match(eval(config.VAR_DECLARATION_MATCH_REGEX)))
            return new RadleyVar(line)

        else return null
    }
}
