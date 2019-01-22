
export const wrap = function (func) {
    if (!new RegExp('new\\s+Function').test(func.toString()))
        return function () { return func }

    return func
}

export const makeRouter = function (routerSource) {
    const source = []

    makeTree(routerSource).reduce(function (path, block, i) {
        const route = routerSource.substring(block[0], block[block.length - 1] + 1)

        if (i === 0)
            source.push(`const i${i} = this.suite${route} || (this.suite${route} = {})`)
        else
            source.push(`const i${i} = i${i - 1}${route} || (i${i - 1}${route} = {})`)

        return path + route
    }, '')

    return new Function('args', `${source.join('\n')}; return i${source.length - 1}`)
}

export const makeCaller = function (routerSource) {
    const [routerPath] = routerSource.match(/this.suite\[(\s|\S)+]/g)

    return new Function('args', `
        let func = this.route(args)

        if (!(func.constructor === Function)) {
            if (this.tractable(args))
                func = ${routerPath.split(/\s/g).filter(function (e) { return !!e }).join(' ')} = this.optimized(args)
            else
                func = ${routerPath.split(/\s/g).filter(function (e) { return !!e }).join(' ')} = this.generic(args)
        }

        return func(args)
    `)
}

function makeTree(source, target = ['[', ']'], p = [-1], ctx = []) {
    for (; ++p[0] < source.length;)
        if (source[p[0]] === target[0]) // open brace
            ctx.push(makeTree(source, target, p, [p[0]]))

        else if (source[p[0]] === target[1]) // close brace
            return ctx.concat(p[0])

    return ctx
}
