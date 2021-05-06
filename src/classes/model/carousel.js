import {carousel, css} from "../../utils";
import {Block} from './block'

export class Carousel extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {styles} = this.options
        return carousel(this.value, css(styles))
    }
}