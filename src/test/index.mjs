import js from '../main/nozzles/javascript'
import radley from '../main/radley'

const suite = radley.suite({
    args: ['$R', '$A', '$map', '$reduce'],
    nozzle: js,
    code: `
    { tag: 'RL', type: 'loop' } | @ = 0 ; @ < $R.shape[^] ; @++
        { tag: 'RL', type: 'loop' } | @ = 0 ; @ < $A.shape[^] ; @++
           
            { tag: 'RL', type: 'assign' } | $ri = @ * $R.strides[^]
            { tag: 'AL', type: 'assign' } | $ai = @ * $A.strides[^]

            { type: 'assign' } | $R.data[$ri] = $reduce($map($A.data[$ai]), $R.data[$ri])
    
    { type: 'return' } | $R`
})

import util from 'util'
console.log(util.inspect(suite, false, null, true /* enable colors */))
