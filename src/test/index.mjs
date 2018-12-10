console.log('Hello Nathan, create me\n')

import config from '../resources/arrow.json'
import util from 'util'

import radley from '../main'


radley.suite({
    args: ['$A', '$R', '$mapper', '$reducer'],
    meta: { range: [1, 10] },
    code: `
    RL: for(@ < $R.shape[^]){
        AL: for(@ < $A.shape[^]){
            $ri = @RL * $R.strides[^RL]
            $ai = @AL * $A.strides[^AL]

            $R.data[$ri] = $reducer($mapper($A.data[$ai]), $R.data[$ri])
        }
    }

    return $R`
})

