import {card, css} from "../../utils";
import {Block} from './block'

export class Card extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const  {image, title, text, groupItem, link} = this.value
        const {styles} = this.options
        return card(image, title, groupItem, text, link,  css(styles))
    }
}