import config from '../../resources/arrow.json'
import util from 'util'

export default class RadleyLoop {
    constructor(line) {
        this.line = line
        this.isWrapper = true
        this.children = []
    }
}
