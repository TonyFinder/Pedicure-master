import anna from '../images/anna.jpg';
import nails1 from '../images/1.jpg';
import nails2 from '../images/3.jpg';
import nails3 from '../images/8.jpg';
import nails4 from '../images/5.jpg';
import nails5 from '../images/2.jpg';

export const images = {
    anna,
}
export const introductionValues: IntroductionValueType[] = [
    {id: 1, image: nails1, value: 'Занимаюсь педикюром с 2018 года и не могу остановиться!'},
    {id: 2, image: nails2, value: 'Непрерывно совершенствую себя как мастер и преподаватель.'},
    {id: 3, image: nails3, value: 'Провожу индивидуальные курсы по педикюру.'},
    {id: 4, image: nails4, value: 'Готовлю ОНЛАЙН-КУРС по обработке и дизайну для ноготков.'},
    {id: 5, image: nails5, value: 'Продаю только испытанную на себе косметику.'},
]

// types
export type ImagesType = typeof images
export type IntroductionValueType = {
    id: number
    image: string
    value: string
}