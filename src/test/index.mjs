console.log('Hello Nathan, create me\n')

import config from '../resources/arrow.json'
import util from 'util'

import radley from '../main/radley'


radley.suite({
    args: ['$A', '$R', '$mapper', '$reducer'],
    meta: { repeat: { RL: 5, AL: 5 } },
    nozzle: JAVASCRIPT,
    code: `

    RL: for(@ < $R.shape[^]){
        AL: for(@ < $A.shape[^]){
            $ri = RL: @ * $R.strides[^]
            $ai = AL: @ * $A.strides[^]

            $R.data[$ri] = $reducer($mapper($A.data[$ai]), $R.data[$ri])
        }
    }

    return $R`
})

