
export const makeRouter = function (hash) {
    return new Function('args', `
        ${hash.map(function (field, i) {
            if (!i)
                return `const i${i} = this.suite[${field}] || (this.suite[${field}] = {})`
            else
                return `const i${i} = i${i - 1}[${field}] || (i${i - 1}[${field}] = {})`
        }).join('\n')}

        return i${hash.length - 1}
    `)
}

export const makeCaller = function (tiers) {
    return new Function('args', `
        let func, result = this.route(args)

        if (result.constructor === Object) {
            ${makeTierChecks(tiers)}   
        }

        return func(args)
    `)
}

export const makeTierChecks = function (tiers) {
    return Object.values(tiers)
        .map(function (tier, i) {
            return (!i ? '' : 'else') +
                `if(${tier.criteria}){
                    func = result[args.method] = tiers.methods[method] || tiers.methods
                }`
        })
        .join('\n')
}
