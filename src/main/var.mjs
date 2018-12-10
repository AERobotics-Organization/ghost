import config from '../resources/arrow.json'
import util from 'util'

export default class RadleyVar {
    constructor(line) {
        this.line = line
        this.isWrapper = false
    }
}
