import js from '../main/nozzles/js'
import radley from '../main/radley'

const suite = radley.suite({
    args: ['$A', '$R', '$map', '$reduce'],
    meta: {
        RL: { repeat: [1, 2, 3, 4, 5] },
        AL: { repeat: [1, 2, 3, 4, 5] }
    },
    nozzle: js,
    code: `

    { tag: 'RL', type: 'loop' } : @ < $R.shape[^] 
        { tag: 'AL', type: 'loop' } : @ < $A.shape[^] 
            { tag: 'RL', type: 'assign', do: 'sum' } : $ri = @ * $R.strides[^]
            { tag: 'AL', type: 'assign', do: 'sum' } : $ai = @ * $A.strides[^]
            
            { type: 'assign' } : $R.data[$ri] = $reduce($map($A.data[$ai]), $R.data[$ri])

    { type: 'return' } : $R`

})

// import util from 'util'
// console.log(util.inspect(suite, false, null, true /* enable colors */))

