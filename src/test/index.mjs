import js from '../main/nozzles/javascript'
import radley from '../main/radley'

const result = radley.suite({
    args: ['R', 'A', 'B'],
    nozzle: js,
    meta: function ({ R, A, B }) {
        return `
            expand=${true},

            R.header.shape[0]=${R.header.shape[0]},
            R.header.shape[1]=${R.header.shape[1]},
            A.header.shape[1]=${A.header.shape[1]},

            B.header.strides[0]=${B.header.strides[0]},
            B.header.strides[1]=${B.header.strides[1]},

            A.header.strides[0]=${A.header.strides[0]},
            A.header.strides[1]=${A.header.strides[1]},
        `
    },
    code: `
        AL: @ = 0 ; @ < R.header.shape[0] ; @++
            BL: @ = 0 ; @ < R.header.shape[1] ; @++
                SL: @ = 0 ; @ < A.header.shape[1] ; @++
        
                    AL, BL: ri = @ * R.header.strides[0] + @
                    AL, SL: ai = @ * A.header.strides[0] + @ * A.header.strides[1]
                    BL, SL: bi = @ * B.header.strides[1] + @ * B.header.strides[0]

                    SL: R.data[ri] = R.data[ri] + A.data[ai] * B.data[bi]
        return R`
}).call({
    R: { header: { shape: [4, 4], strides: [4, 1], data: new Float64Array(16).map(Math.random) } },
    A: { header: { shape: [4, 4], strides: [4, 1], data: new Float64Array(16).map(Math.random) } },
    B: { header: { shape: [4, 4], strides: [4, 1], data: new Float64Array(16) } }
})


import util from 'util'
console.log(util.inspect(result, false, null, true /* enable colors */))
