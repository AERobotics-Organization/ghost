console.log('Hello Nathan, create me\n\n\n')

import LoopGroup from '../main/loop'
import util from 'util'

const loopGroup = new LoopGroup({ dims: [2, 2, 2, 2, 2, 2, 2, 2], nested: true })
console.log(util.inspect(loopGroup.context.body, false, null, true /* enable colors */))
