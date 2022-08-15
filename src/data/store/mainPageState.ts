import nails17 from '../../images/nails/17.jpg';
import nails14 from '../../images/nails/14.jpg';
import nails11 from '../../images/nails/11.jpg';
import nails3 from '../../images/nails/3.jpg';
import nails12 from '../../images/nails/12.jpg';
import nails6 from '../../images/nails/6.jpg';
import nails5 from '../../images/nails/5.jpg';
import nails1 from '../../images/nails/1.jpg';
import nails2 from '../../images/nails/2.jpg';
import nails4 from '../../images/nails/4.jpg';
import nails7 from '../../images/nails/7.jpg';
import nails8 from '../../images/nails/8.jpg';
import nails9 from '../../images/nails/9.jpg';
import nails10 from '../../images/nails/10.jpg';
import nails13 from '../../images/nails/13.jpg';
import nails15 from '../../images/nails/15.jpg';
import nails16 from '../../images/nails/16.jpg';
import nails18 from '../../images/nails/18.jpg';

export const introductionValues = {
    header: 'Магия педикюра',
    online: 'онлайн-курс',
    bullets: [
        {
            id: 1,
            bullet: 'Идеально',
            info: 'Чистая обработка пальчиков'
        },
        {
            id: 2,
            bullet: 'Эффектно',
            info: 'Трендовый дизайн от которого не оторвать глаз'
        },
        {
            id: 3,
            bullet: 'Доступно',
            info: 'Сможет каждый при правильном подходе'
        },
    ],
    youWillKnow: [
        {
                    description: 'Пройдя данный курс, вы поймёте:',
                    info: [
                        {id: 1, value: '- как безопасно обрабатывать пальчики'},
                        {
                            id: 2,
                            value: '- как сделать так, чтобы клиент повторно приходил с чистым околоногтевым пространством'
                        },
                        {id: 3, value: '- все нюансы и фишки в работе с плёнками и слайдерами'},
                    ],
        },
        {
                description: 'а также:',
                info: [
                    {
                        id: 1,
                        value: '- покажу вам все материалы и инструменты, которыми я пользуюсь и ссылки где их приобретаю'
                    },
                    {id: 2, value: '- обратная связь и ответы на вопросы касаемо курса'},
                    {id: 3, value: '- сертификат прохождения курса'},
                ],
        }
    ],
    pictures: [
        {id: 1, image: nails17, value: 'Практикующий мастер педикюра с 2018 года'},
        {id: 2, image: nails14, value: 'Непрерывно совершенствую себя как мастер и преподаватель'},
        {id: 3, image: nails11, value: 'Провожу индивидуальные курсы по педикюру с 2021 года'},
        {id: 4, image: nails3, value: 'Практикую исключительно безопасный педикюр'},
        // {id: 4, image: nails3, value: 'Готовлю ОНЛАЙН-КУРС по обработке и дизайну ногтей.'},
        // {id: 5, image: nails12, value: 'Продаю только проверенную косметику.'},
    ],
    greetings: {
        header: {
            anna: 'Здравствуйте, меня зовут Анна!',
            aboutMe: 'Немного обо мне'
        },
        author: 'Автор курса "Магия педикюра"',
        description: "Представляю авторский курс повышения квалификации по безопасной эстетической обработке пальчиков и покрытию плёнками и слайдерами в педикюре"
    },
    gallery: {
        header: 'Ваши работы после обучения',
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
    },
    program: {
        header: 'Программа обучения',
        blocks: [
            {
            id: 1,
            header: 'Практика “Плёнки”',
            lessons: [
                {id: 1, value: 'Снятие старого покрытия', mark: 'Урок 1. '},
                {id: 2, value: 'Работа с длиной и формой', mark: 'Урок 2. '},
                {id: 3, value: 'Подготовка к работе фрезами', mark: 'Урок 3. '},
                {id: 4, value: 'Работа фрезами: цилиндр, капля, шар', mark: 'Урок 4. '},
                {id: 5, value: 'Нанесение базы', mark: 'Урок 5. '},
                {id: 6, value: 'Подготовка плёнок к работе', mark: 'Урок 6. '},
                {id: 7, value: 'Установка плёнок', mark: 'Урок 7. '},
                {id: 8, value: 'Снятие плёнок', mark: 'Урок 8. '},
                {id: 9, value: 'Обработка фото', mark: 'Урок 9. '},
            ]
        },
        {
            id: 2,
            header: 'Практика “Слайдеры”',
            lessons: [
                {id: 1, value: 'Подготовка к покрытию', mark: 'Урок 1. '},
                {id: 2, value: 'Покрытие: база и гель-лак', mark: 'Урок 2. '},
                {id: 3, value: 'Установка слайдеров', mark: 'Урок 3. '},
            ]
        },
        {
            id: 3,
            header: 'Презентация “Материалы, инструменты, оборудование”',
            lessons: [
                {id: 1, value: 'Покажу только те материалы, инструменты и оборудование, которые использую в работе', mark: ''},
                {id: 2, value: 'Вставлю ссылки на всё, что будет в презентации', mark: ''},
                {id: 3, value: 'И много другой полезной информации', mark: ''},
            ]
        },
        /*{
            id: 4,
            header: 'Доступ к курсу',
            lessons: [
                {id: 1, value: 'Платформа getCourse', mark: ''},
                {id: 2, value: 'Доступ на 3 месяца', mark: ''},
            ]
        }*/
        ]
    },
    discount: {
        header: 'Приятные дополнения к курсу',
        blocks:[
            {
            id: 1,
            header: 'Про слайдеры',
            lessons: [
                {id: 1, value: 'В первый месяц обучения вы можете приобрести слайдеры ', add: 'со скидкой 25%'},
                {id: 2, value: 'Итоговая цена одного слайдера будет ', add: '150 рублей вместо 200 рублей'},
                {id: 3, value: 'Минимальный заказ для применения скидки - всего 5 штук'},
                {id: 4, value: 'Приобрести слайдеры можно только у меня'},
                {id: 5, value: 'Будут доступны новые форматы слайдеров!'},
                {id: 6, value: 'Предложение действительно для заказов из России'},
            ]
        },
        {
            id: 2,
            header: 'Про плёнки',
            lessons: [
                {id: 1, value: 'В первый месяц обучения вы можете приобрести плёнки ', add: 'со скидкой 15%'},
                {id: 2, value: 'Итоговая цена одной плёнки будет ', add: '463 рубля вместо 545 рублей'},
                {id: 3, value: 'Минимальный заказ для применения скидки - всего 5 штук'},
                {id: 4, value: 'Приобрести плёнки можно только у на официальном сайте ', add: 'www.stampingshop.ru'},
                {id: 5, value: 'Предложение действительно для заказов из России'},
            ]
        },
        ]
    }
}

export type IntroductionValuesType = typeof introductionValues