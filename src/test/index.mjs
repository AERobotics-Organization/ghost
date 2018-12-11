console.log('Hello Nathan, create me\n')

import config from '../resources/json/regex.json'
import util from 'util'

import radley from '../main'
import javascript from '../main/nozzles/js'


const suite = radley.suite({
    args: ['$A', '$R', '$map', '$reduce'],
    meta: { repeat: { RL: 5, AL: 5 } },
    nozzle: javascript,
    code: `

    RL: for(@ < $R.shape[^]){
        AL: for(@ < $A.shape[^]){
            RL: $ri = @ * $R.strides[^]
            AL: $ai = @ * $A.strides[^]

            $R.data[$ri] = $reduce($map($A.data[$ai]), $R.data[$ri])
        }
    }

    return $R`
})

console.log(util.inspect(suite, false, null, true /* enable colors */))

