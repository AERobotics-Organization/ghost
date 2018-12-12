import { NEW_LINE, TAB } from '../../resources/constants'

import util from 'util'

export default class RadleyContainer {
    constructor() {
        this.children = new Array()
    }

    // toString() {
    //     return this.children
    //         .map(function (child) { return child.toString() })
    // }

    // [util.inspect.custom]() { return this.toString() }
}
