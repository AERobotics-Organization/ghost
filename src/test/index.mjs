console.log('Hello Nathan, create me\n')

import util from 'util'

import Loop from '../main/primitives/loop'
import Block from '../main/primitives/block'
import Var from '../main/primitives/variable'

const context = { "bootiesToTap": ["miley ", "ariana "], "bigBooties": 10, "buttz": "ten" }

const block = new Block([

    new Loop({ stop: 2 }, [
        `console.log($bootiesToTap[$0] + $buttz + " outOf " + $bigBooties)`
    ])

], context)

console.log(util.inspect(block, false, null, true /* enable colors */))
