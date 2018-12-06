console.log('Hello Nathan, create me\n')

import util from 'util'

import Var from '../main/primitives/variable'
import Block from '../main/primitives/block'
import LoopGroup from '../main/primitives/loop/group'

new Block([
    LoopGroup
        .nest([
            new LoopGroup({ over: R.shape }),
            new LoopGroup({ over: A.shape })
        ])
        .inject([
            new Var({ init: `0L * $R.strides[L0]`, tag: 'ri' }).join('+'),
            new Var({ init: `1L * $A.strides[L1]`, tag: 'ai' }).join('+'),
            new Var(`$R.data[$ri] = $reducer($mapper($A.data[$ai], $R.data[$ri]))`)
        ])
])

console.log(util.inspect(block, false, null, true /* enable colors */))
