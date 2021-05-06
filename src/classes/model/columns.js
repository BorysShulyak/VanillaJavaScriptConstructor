import {col, css, row} from "../../utils";
import {Block} from './block'

export class Columns extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const html = this.value.map(item => item.toHTML ? col(item.toHTML()) : col(item)).join('')
        return row(html, css(this.options.styles))
    }
}