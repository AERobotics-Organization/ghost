import { CLOSING_BRACE, OPENING_BRACE, WHITE_SPACE } from '../../resources/regex'

import RadleyStatement from './statements'

export default class RadleyTree {
    static init(code, statement = []) {

        let line
        while ((line = code.shift()) !== undefined)

            if (line.match(CLOSING_BRACE))
                return statement

            else if (line.match(OPENING_BRACE))
                statement.push(this.init(code, new RadleyStatement(line)))

            else if (!line.match(WHITE_SPACE))
                statement.push(new RadleyStatement(line))


        return statement
    }
}
