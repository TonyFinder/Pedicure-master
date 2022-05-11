import anna from '../images/anna.jpg';
import nails1 from '../images/nails/1.jpg'
import nails2 from '../images/nails/2.jpg';
import nails3 from '../images/nails/3.jpg';
import nails4 from '../images/nails/4.jpg';
import nails5 from '../images/nails/5.jpg';
import nails6 from '../images/nails/6.jpg';
import nails7 from '../images/nails/7.jpg';
import nails8 from '../images/nails/8.jpg';
import nails9 from '../images/nails/9.jpg';
import nails10 from '../images/nails/10.jpg';
import nails11 from '../images/nails/11.jpg';
import nails12 from '../images/nails/12.jpg';
import nails13 from '../images/nails/13.jpg';
import nails14 from '../images/nails/14.jpg';
import nails15 from '../images/nails/15.jpg';
import nails16 from '../images/nails/16.jpg';
import nails17 from '../images/nails/17.jpg';
import nails18 from '../images/nails/18.jpg';
import whatsApp from '../images/icons/whatsApp.png';
import instagram from '../images/icons/instagram.png';
import vk from '../images/icons/vk.png';
import telegram from '../images/icons/telegram.png';
import _372 from '../images/goods/png8/372.png'
import _832 from '../images/goods/png8/832.png'
import _1111 from '../images/goods/png8/1111.png'
import _991039 from '../images/goods/png8/991039.png'
import _111 from '../images/goods/png8/111.png'
import _222 from '../images/goods/png8/222.png'
import _889 from '../images/goods/png8/889.png'
import _367 from '../images/goods/png8/367.png'
import _888 from '../images/goods/png8/888.png'
import _369 from '../images/goods/png8/369.png'

export const mainPageImages = {anna, introduction: nails7}
export const icons = [
    {id: 'whatsApp', image: whatsApp, url: 'https://wa.me/79510215025'},
    {id: 'instagram', image: instagram, url: 'https://www.instagram.com/pedicure.cabinet'},
    {id: 'vk', image: vk, url: 'https://vk.com/pedicure.cabinet'},
    {id: 'telegram', image: telegram, url: 'https://t.me/PedicureCabinet'},
]
export const introductionValues = {
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
export const goodsImages = {
        372: _372,
        832: _832,
        1111: _1111,
        991039: _991039,
        111: _111,
        222: _222,
        889: _889,
        367: _367,
        888: _888,
        369: _369,
}

// types
export type ImagesMainPageType = typeof mainPageImages
export type IconsType = typeof icons
export type IntroductionValuesType = typeof introductionValues
export type GoodsImagesType = typeof goodsImages