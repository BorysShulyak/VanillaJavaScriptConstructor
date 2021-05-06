import {col, css, row} from "../../utils";
import {Block} from './block'

export class Text extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        return row(col(`<p>${this.value}</p>`), css(this.options.styles))
    }
}