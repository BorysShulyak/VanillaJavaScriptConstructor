import image from './assets/image.png'
import carousel from './assets/carousel.jpg'
import {Title} from "./classes/model/title";
import {Image} from "./classes/model/image";
import {Columns} from "./classes/model/columns";
import {Card} from "./classes/model/card";
import {Text} from "./classes/model/text";

const text = `Удевительные возможности`

export const model = [
    new Title('Конструктор сайтов на чистом JavaScript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: 'green',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new Image(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }),
    new Columns([
        new Card ({
            image: image,
            title: 'Boris',
            text: 'Hello World',
            groupItem: 'Hello',
            link: 'Hello'
        }, {}),
        new Card ({
            image: image,
            title: 'Boris',
            text: 'Hello World',
            groupItem: 'Hello',
            link: 'Hello'
        }, {}),
        new Card({
            image: image,
            title: 'Boris',
            text: 'Hello World',
            groupItem: 'Hello',
            link: 'Hello'
        }, {}),
        'Использование bootstrap',
        'JavaScript - мощь'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            // color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new Text(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),
    // new CarouselBlock([carousel, carousel, image], {styles: { width: '500px', height: '500px'}})
]