console.log('Hello Nathan, create me\n')

import util from 'util'

import radley from '../main/radley'
import javascript from '../main/nozzles/js'


radley.suite({
    args: ['$A', '$R', '$map', '$reduce'],
    meta: [
        ['RL', 'repeat', [1, 2, 3, 4, 5]],
        ['AL', 'repeat', [1, 2, 3, 4, 5]],
    ],
    nozzle: javascript,
    code: `

    RL: loop(@ < $R.shape[^]) {
        AL: loop(@ < $A.shape[^]) {
            RL: $ri = @ * $R.strides[^]
            AL: $ai = @ * $A.strides[^]

            $R.data[$ri] = $reduce($map($A.data[$ai]), $R.data[$ri])
        }
    }

    return $R`
})

// console.log(util.inspect(suite, false, null, true /* enable colors */))

