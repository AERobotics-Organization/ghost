import radley from '../main'

radley.suite(function ({ A, B, R }) {
    const source = []

    for (let i = 0; i < R.header.shape[0]; i++) {
        for (let j = 0; j < R.header.shape[1]; j++) {
            const mults = []
            for (let k = 0; k < A.header.shape[1]; k++) {
                mults.push(` A.header.data[${i * A.shape[1] + k}] * B.header.data[${k * B.shape[1] + j}] `)
            }
            source.push(`R.header.data[${source.length}]=${mults.join(' + ')}`)
        }
    }

    source.push('return R')
    return new Function('A', 'B', 'R', source.join('\n'))
})
