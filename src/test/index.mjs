console.log('Hello Nathan, create me\n')

import config from '../resources/arrow.json'
import util from 'util'

import Var from '../main/primitives/variable'
import Method from '../main/primitives/method'
import LoopGroup from '../main/primitives/loop/group'


new Suite(new Method(['A', 'R', 'mapper', 'reducer'], [
    LoopGroup
        .nest([
            new LoopGroup({ over: '$R.shape', size: '%' }),
            new LoopGroup({ over: '$A.shape', size: '%' })
        ])
        .feed([
            new Var({ tag: 'ri', init: '@0 * $R.strides[^0]', type: config.LET }).join('+'),
            new Var({ tag: 'ai', init: '@1 * $A.strides[^1]', type: config.LET }).join('+'),
            new Var({ init: '$R.data[$ri] = $reducer($mapper($A.data[$ai], $R.data[$ri]))' })
        ]),
    'return $R'
]))

console.log(util.inspect(block, false, null, true /* enable colors */))
