import radley from '../main'

const A = {
    header: { shape: [2, 2, 2, 2], strides: [8, 4, 2, 1] },
    data: [...new Array(16).fill(null).keys()]
}

const B = {
    header: { shape: [2, 2, 2, 2], strides: [8, 4, 2, 1] },
    data: [...new Array(16).fill(null).keys()]
}

const R = {
    header: { shape: [2, 2], strides: [2, 1] },
    data: new Array(8).fill(0)
}

const result = radley.suite({
    meta: function ({ A }) {
        return `${A.header.shape.length}`
    },
    method: function ({ A }) {
        const source = [], aIndex = [], bIndex = []

        source.push(`let ri = 0`)
        for (let i = 0; i < A.header.shape.length; i++) {
            source.push(`for(let i${i} = 0; i${i} < A.header.shape[${i}]; i${i}++){`)
            aIndex.push(`i${i} * A.header.strides[${i}]`)
            bIndex.push(`i${i} * B.header.strides[${i}]`)
        }

        source.push(`R.data[ri++] = reducer(A.data[${aIndex.join('+')}], B.data[${bIndex.join('+')}])`)
        source.push('}'.repeat(A.header.shape.length))
        source.push(`return R`)

        return new Function('{ A, B, R, reducer }', source.join('\n'))
    }
})


console.log(result)
