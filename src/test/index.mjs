import radley from '../main'

const A = { header: { shape: [4, 4], strides: [4, 1], data: [4, 5, 2, 4, 5, 4, 6, 7, 4, 5, 3, 5, 6, 7, 3, 5] } }
const B = { header: { shape: [4, 4], strides: [4, 1], data: [4, 5, 2, 4, 5, 4, 6, 7, 4, 5, 3, 5, 6, 7, 3, 5] } }
const R = { header: { shape: [4, 4], strides: [4, 1], data: new Float64Array(16) } }

radley.suite(function ({ A, B, R }) {
    const source = []

    for (let i = 0; i < R.header.shape[0]; i++) {
        for (let j = 0; j < R.header.shape[1]; j++) {
            const mults = []
            for (let k = 0; k < A.header.shape[1]; k++) {
                mults.push(` A.header.data[${i * A.header.shape[1] + k}] * B.header.data[${k * B.header.shape[1] + j}] `)
            }
            source.push(`R.header.data[${source.length}]=${mults.join(' + ')}`)
        }
    }

    source.push('return R')
    return new Function('{ A, B, R }', source.join('\n'))
}).call({ A, B, R })

console.log(R.header.data)