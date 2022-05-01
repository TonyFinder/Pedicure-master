import anna from '../images/anna.jpg';
import nails1 from '../images/1.jpg';
import nails2 from '../images/2.jpg';
import nails3 from '../images/8.jpg';
import nails4 from '../images/9.jpg';
import nails5 from '../images/12.jpg';
import introduction from '../images/14.jpg';
import whatsApp from '../images/icons/whatsApp.png'
import instagram from '../images/icons/instagram.png'
import vk from '../images/icons/vk.png'
import telegram from '../images/icons/telegram.png'

export const images = {anna, introduction}
export const icons = [whatsApp, instagram, vk, telegram]
export const introductionValues: IntroductionValuesType = {
    pictures: [
        {id: 1, image: nails1, value: 'Занимаюсь педикюром с 2018 года и не могу остановиться!'},
        {id: 2, image: nails2, value: 'Непрерывно совершенствую себя как мастер и преподаватель.'},
        {id: 3, image: nails3, value: 'Провожу индивидуальные курсы по педикюру.'},
        {id: 4, image: nails4, value: 'Готовлю ОНЛАЙН-КУРС по обработке и дизайну для ноготков.'},
        {id: 5, image: nails5, value: 'Продаю только испытанную на себе косметику.'},
    ],
    greetings: {
        header: {
            anna: 'Здравствуйте, это Аня!',
            aboutMe: 'Немного обо мне'
        },
        description: [
            'Здесь вы найдёте информацию исключительно про педикюр.',
            'Я безумно рада, что нашла своё призвание.',
            "С удовольствием делюсь опытом со своими учениками!",
            ],
        restInfo: "В левом верхнем углу вы найдёте меню с более подробной информацией."
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
}
export type IntroductionImagesType = {
    id: number
    image: string
    value: string
}