console.log('Hello Nathan, create me\n')

import config from '../resources/arrow.json'
import util from 'util'

import Var from '../main/primitives/variable'
import Method from '../main/primitives/method'
import LoopGroup from '../main/primitives/loop/group'

new Method(['R', 'A', 'mapper', 'reducer'], [
    LoopGroup
        .nest([
            new LoopGroup({ over: '$R.shape', size: '%0' }),
            new LoopGroup({ over: '$A.shape', size: '%1' })
        ])
        .feed([
            new Var({ tag: 'ri', init: '0L * $R.strides[L0]' }).join('+'),
            new Var({ tag: 'ai', init: '1L * $A.strides[L1]' }).join('+'),
            new Var({
                tag: 'res',
                init: '$R.data[$ri] = $reducer($mapper($A.data[$ai], $R.data[$ri]))',
                type: config.EXISTS
            })
        ])
], 'return $R')

console.log(util.inspect(block, false, null, true /* enable colors */))
