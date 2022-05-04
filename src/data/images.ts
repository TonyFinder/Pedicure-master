import anna from '../images/anna.jpg';
import nails1 from '../images/1.jpg';
import nails2 from '../images/2.jpg';
import nails3 from '../images/3.jpg';
import nails4 from '../images/4.jpg';
import nails5 from '../images/5.jpg';
import nails6 from '../images/6.jpg';
import nails7 from '../images/7.jpg';
import nails8 from '../images/8.jpg';
import nails9 from '../images/9.jpg';
import nails10 from '../images/10.jpg';
import nails11 from '../images/11.jpg';
import nails12 from '../images/12.jpg';
import nails13 from '../images/13.jpg';
import nails14 from '../images/14.jpg';
import nails15 from '../images/15.jpg';
import nails16 from '../images/16.jpg';
import nails17 from '../images/17.jpg';
import nails18 from '../images/18.jpg';
import whatsApp from '../images/icons/whatsApp.png'
import instagram from '../images/icons/instagram.png'
import vk from '../images/icons/vk.png'
import telegram from '../images/icons/telegram.png'

export const images = {anna, introduction: nails7, price: nails5}
export const icons = [
    {id: 1, image: whatsApp, url: 'https://wa.me/79510215025'},
    {id: 2, image: instagram, url: 'https://www.instagram.com/pedicure.cabinet'},
    {id: 3, image: vk, url: 'https://vk.com/pedicure.cabinet'},
    {id: 4, image: telegram, url: 'https://t.me/PedicureCabinet'},
]
export const introductionValues: IntroductionValuesType = {
    pictures: [
        {id: 1, image: nails17, value: 'Занимаюсь педикюром с 2018 года.'},
        {id: 2, image: nails14, value: 'Непрерывно совершенствую себя как мастер и преподаватель.'},
        {id: 3, image: nails11, value: 'Провожу индивидуальные курсы по педикюру с 2021 года.'},
        {id: 4, image: nails3, value: 'Готовлю ОНЛАЙН-КУРС по обработке и дизайну ногтей.'},
        {id: 5, image: nails12, value: 'Продаю только проверенную косметику.'},
    ],
    greetings: {
        header: {
            anna: 'Здравствуйте, меня зовут Анна!',
            aboutMe: 'Немного обо мне'
        },
        description: [
            'Здесь вы найдёте информацию исключительно про педикюр.',
            'Я безумно рада, что нашла своё призвание.',
            "С удовольствием делюсь опытом со своими учениками!",
            ],
        restInfo: "В левом верхнем углу вы найдёте меню с более подробной информацией."
    },
    gallery: {
        header: 'Примеры моих работ',
        images: [
            {id: 1, image: nails6},
            {id: 2, image: nails5},
            {id: 3, image: nails1},
            {id: 4, image: nails2},
            {id: 5, image: nails4},
            {id: 6, image: nails7},
            {id: 7, image: nails8},
            {id: 8, image: nails9},
            {id: 9, image: nails10},
            {id: 10, image: nails11},
            {id: 11, image: nails12},
            {id: 12, image: nails13},
            {id: 13, image: nails14},
            {id: 14, image: nails15},
            {id: 15, image: nails16},
            {id: 16, image: nails17},
            {id: 17, image: nails18},
            {id: 18, image: nails3},
        ],
        restInfo: "листай для просмотра"
    }
}

// types
export type ImagesType = typeof images
export type IntroductionValuesType = {
    pictures: IntroductionImagesType[]
    greetings: {
        header: {
            anna: string
            aboutMe: string
        }
        description: string[]
        restInfo: string
    }
    gallery: {
        header: string
        images: IntroductionImagesType[]
        restInfo: string
    }
}
export type IntroductionImagesType = {
    id: number
    image: string
    value?: string
}