import RadleyStatement from './statement'
import RadleyLoop from './loop'

export default class RadleyParseTree {
    harvest(context) {

        let meta
        const suite = {}
        while ((meta = context.meta.next().value) !== undefined)
            suite[meta] = this.chop.bind(this, context, meta)()

        return suite
    }

    chop(context, meta, statement = null) {

        let line
        while ((line = context.code.next().value) !== undefined)

            if (isClosingBrace(line))
                return statement

            else if (isOpeningBrace(line))
                statement.push(this.chop(new RadleyStatement(meta, line)))

            else
                statement.push(new RadleyStatement(meta, line))


        return statement
    }
}
