import regex from '../../resources/json/regex.json'

export default class RadleyStatement {
    constructor(line) {

        const [
            _,
            hasRefs,
            refs,
            statement
        ] = line.match(eval(regex.STATEMENT_PARSE))

        this.line = statement.trim()

        if (hasRefs)
            this.refs = refs.split(',')
    }

    static match(line) {
        return line.match(eval(regex.STATEMENT_MATCH))
    }

}
