import { CLOSING_BRACE, OPENING_BRACE, WHITE_SPACE } from '../../resources/regex'

import RadleyStatement from './statement'

export default class RadleyTree {
    static init(code, statement = []) {

        let line
        while ((line = code.shift()) !== undefined)

            if (CLOSING_BRACE.test(line))
                return statement

            else if (OPENING_BRACE.test(line))
                statement.push(this.init(code, new RadleyStatement(line)))

            else if (!WHITE_SPACE.test(line))
                statement.push(new RadleyStatement(line))


        return statement
    }
}
