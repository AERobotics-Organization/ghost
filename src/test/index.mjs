import js from '../main/nozzles/javascript'
import radley from '../main/radley'

const result =
    radley
        .suite({
            args: ['$R', '$A', '$map', '$reduce'],
            nozzle: js,
            code: `
            { tag: 'RL', type: 'loop' } | @ = 0 ; @ < $R.shape[^] ; @++
                { tag: 'AL', type: 'loop' } | @ = 0 ; @ < $A.shape[^] ; @++
                
                    { tag: 'RL', type: 'assign', op: '+' } | $ri = @ * $R.strides[^]
                    { tag: 'AL', type: 'assign', op: '+' } | $ai = @ * $A.strides[^]

                    { type: 'assign' } | $R.data[$ri] = $reduce($map($A.data[$ai]), $R.data[$ri])
            
            { type: 'return' } | $R`
        })
        .lookup(`({ 
            RL: { repeat: 1 }, 
            AL: { repeat: 4 } 
        })`)
        .call(null,
            { shape: [1], strides: [1], data: new Float64Array(1) },
            { shape: [3, 7, 3, 5], strides: [15 * 7, 15, 5, 1], data: new Float64Array(3 * 7 * 3 * 5).map(Math.random) },
            function (a) { return a },
            function (a, b) { return a + b })

import util from 'util'
console.log(util.inspect(result, false, null, true /* enable colors */))
