import js from '../main/nozzles/javascript'
import radley from '../main/radley'

const suite = radley.suite({
    args: ['$A', '$R', '$map', '$reduce'],
    meta: {
        $R: ['shape.length'],
        $A: ['shape.length'],
        $ri: ['sum', 'volatile'],
        $ai: ['sum', 'volatile'],
    },
    nozzle: js,
    code: `

    loop : @ = 0 ; @ < $R.shape[^] ; @++
        loop : @ = 0 ; @ < $A.shape[^] ; @++
            
            assignment : $ri = @ * $R.strides[^]
            assignment : $ai = @ * $A.strides[^]

            assignment : $R.data[$ri] = $reduce($map($A.data[$ai]), $R.data[$ri])

    return : $R`

})

import util from 'util'
console.log(util.inspect(suite, false, null, true /* enable colors */))

