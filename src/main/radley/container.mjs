import { NEW_LINE } from '../../resources/constants'

import util from 'util'

export default class RadleyContainer {
    constructor() {
        this.children = new Array()
    }

    // toString() {
    //     return this.children
    //         .map(function (child) { return child.toString() })
    //         .join(NEW_LINE)
    // }

    // [util.inspect.custom]() { return this.toString() }
}
