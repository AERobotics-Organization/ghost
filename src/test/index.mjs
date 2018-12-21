console.log('Hello Nathan, create me\n')

import js from '../main/nozzles/js'
import radley from '../main/radley'

radley.suite({
    args: ['$A', '$R', '$map', '$reduce'],
    meta: {
        RL: { repeat: [1, 2, 3, 4, 5] },
        AL: { repeat: [1, 2, 3, 4, 5] }
    },
    nozzle: js,
    code: `

    { tag: RL, do: [loop] } : @ < $R.shape[^] 
        { tag: AL, do: [loop] } : @ < $A.shape[^] 

            { tag: RL, do: [sum, assign] } : $ri = @ * $R.strides[^]
            { tag: AL, do: [sum, assign] } : $ai = @ * $A.strides[^]

            { do: [assign] } : $R.data[$ri] = $reduce($map($A.data[$ai]), $R.data[$ri])
        

    { do: [return] } : $R`
})

// import util from 'util'
// console.log(util.inspect(suite, false, null, true /* enable colors */))

