
export const makeRouter = function (hash) {
    return new Function('args', `
        const i${0} = this.suite[${hash[0]}] || (this.suite[${hash[0]}] = {})

        ${hash.map(function (field, i) {
            if (i) return `const i${i} = i${i - 1}[${field}] || (i${i - 1}[${field}] = {})`

            return ''
        }).join('\n')}

        return i${hash.length - 1}[args.method] || i${hash.length - 1}
    `)
}

export const makeCaller = function (tiers) {
    return new Function('args', `
        let func = this.route(args)

        if (func.constructor === Object) {
            ${makeTierChecks(tiers)}   
        }

        return func(args)
    `)
}

export const makeTierChecks = function (tiers) {
    return Object.entries(tiers)
        .map(function ([label, tier], i) {
            return (!i ? '' : 'else ') + `if(${tier.criteria}){
                func = func[args.method] = this.tiers.${label}.methods[args.method](args)
            }`
        })
        .join('\n')
}
