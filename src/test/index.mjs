import js from '../main/nozzles/javascript'
import radley from '../main/radley'

const suite = radley.suite({
    args: ['$A', '$R', '$map', '$reduce'],
    meta: {
        RL: { repeat: [1, 2, 3, 4, 5] },
        AL: { repeat: [1, 2, 3, 4, 5] }
    },
    nozzle: js,
    code: `

    { tag: 'RL', type: 'loop' } : @ = 0 ; @ < $R.shape[^] ; @++
        { tag: 'AL', type: 'loop' } : @ = 0 ; @ < $A.shape[^] ; @++
            
            { tag: 'RL', type: 'assignment', operation: '+', modifier: 'volitile' } : $ri = @ * $R.strides[^]
            { tag: 'AL', type: 'assignment', operation: '+', modifier: 'volitile' } : $ai = @ * $A.strides[^]
            
            { type: 'assignment' } : $R.data[$ri] = $reduce($map($A.data[$ai]), $R.data[$ri])

    { type: 'return' } : $R`

})

// import util from 'util'
// console.log(util.inspect(suite, false, null, true /* enable colors */))

