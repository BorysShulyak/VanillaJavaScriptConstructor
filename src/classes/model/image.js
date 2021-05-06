import {css, row} from "../../utils";
import {Block} from './block'

export class Image extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const {imageStyles, alt = '', styles} = this.options
        return row(`<img src="${this.value}" alt="${alt}" style="${css(imageStyles)}" />`, css(styles))
    }
}