import nails01s from '../../images/sliders/s1.jpg';
import nails02s from '../../images/sliders/s2.jpg';
import nails03s from '../../images/sliders/s3.jpg';
import nails04s from '../../images/sliders/s4.jpg';
import nails05s from '../../images/sliders/s5.jpg';
import nails06s from '../../images/sliders/s6.jpg';
import nails07s from '../../images/sliders/s7.jpg';
import nails08s from '../../images/sliders/s8.jpg';
import nails01f from '../../images/films/1f.jpg';
import nails02f from '../../images/films/2f.jpg';
import nails03f from '../../images/films/3f.jpg';
import nails04f from '../../images/films/4f.jpg';
import nails05f from '../../images/films/5f.jpg';
import nails06f from '../../images/films/6f.jpg';
import nails07f from '../../images/films/7f.jpg';
import nails08f from '../../images/films/8f.jpg';
import nails09f from '../../images/films/9f.jpg';
import nails10f from '../../images/films/10f.jpg';
import nails11f from '../../images/films/11f.jpg';
import nails12f from '../../images/films/12f.jpg';
import nails13f from '../../images/films/13f.jpg';
import nails14f from '../../images/films/14f.jpg';
import nails15f from '../../images/films/15f.jpg';
import nails16f from '../../images/films/16f.jpg';
import nails17f from '../../images/films/17f.jpg';
import nails18f from '../../images/films/18f.jpg';
import nails19f from '../../images/films/19f.jpg';
import nails20f from '../../images/films/20f.jpg';
import nails21f from '../../images/films/21f.jpg';

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
                {id: 2, value: '- обратная связь'},
                {id: 3, value: '- сертификат прохождения курса'},
            ],
        }
    ],
    pictures: [
        {id: 1, image: nails01f, value: 'Практикующий мастер педикюра с 2018 года'},
        {id: 2, image: nails02s, value: 'Непрерывно совершенствую себя как мастер и преподаватель'},
        {id: 3, image: nails21f, value: 'Провожу индивидуальные курсы по педикюру с 2021 года'},
        {id: 4, image: nails06s, value: 'Практикую исключительно безопасный педикюр'},
        // {id: 4, image: nails3, value: 'Готовлю ОНЛАЙН-КУРС по обработке и дизайну ногтей.'},
        // {id: 5, image: nails12, value: 'Продаю только проверенную косметику.'},
    ],
    greetings: {
        header: {
            anna: 'Здравствуйте, меня зовут Анна!',
            aboutMe: 'Немного обо мне'
        },
        author: 'Автор курса "Магия педикюра"',
        description: 'Представляю свой авторский курс повышения квалификации по безопасной эстетической обработке пальчиков и покрытию плёнками и слайдерами в педикюре'
    },
    gallery: {
        header: 'Ваши работы после обучения',
        images: [
            {id: 1, image: nails05f},
            {id: 2, image: nails07s},
            {id: 3, image: nails16f},
            {id: 4, image: nails03s},
            {id: 5, image: nails07f},
            {id: 6, image: nails04s},
            {id: 7, image: nails08f},
            {id: 8, image: nails04s},
            {id: 9, image: nails09f},
            {id: 10, image: nails05s},
            {id: 11, image: nails13f},
            {id: 12, image: nails08s},
            {id: 13, image: nails06f},
            {id: 14, image: nails01s},
            {id: 15, image: nails02f},
            {id: 16, image: nails11f},
            {id: 17, image: nails19f},
            {id: 18, image: nails03f},
            {id: 19, image: nails04f},
            {id: 20, image: nails10f},
            {id: 21, image: nails12f},
            {id: 22, image: nails14f},
            {id: 23, image: nails15f},
            {id: 24, image: nails17f},
            {id: 25, image: nails18f},
            {id: 26, image: nails20f},
        ],
        restInfo: 'листай для просмотра'
    },
    program: {
        header: 'Программа обучения "Магия Педикюра"',
        blocks: [
            {
                id: 1,
                header: 'Практика “Плёнки” (для курса "Магия Педикюра")',
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
                header: 'Практика “Слайдеры” (для курса "Магия Педикюра")',
                lessons: [
                    {id: 1, value: 'Подготовка к покрытию', mark: 'Урок 1. '},
                    {id: 2, value: 'Покрытие: база и гель-лак', mark: 'Урок 2. '},
                    {id: 3, value: 'Установка слайдеров', mark: 'Урок 3. '},
                ]
            },
            {
                id: 3,
                header: 'Презентация “Материалы, инструменты, оборудование” (для курса "Магия Педикюра")',
                lessons: [
                    {
                        id: 1,
                        value: 'Покажу только те материалы, инструменты и оборудование, которые использую в работе',
                        mark: ''
                    },
                    {id: 2, value: 'Укажу ссылки на всё, что будет в презентации', mark: ''},
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
        blocks: [
            {
                id: 1,
                header: 'Про слайдеры',
                lessons: [
                    {
                        id: 1,
                        value: 'При покупке курса вы можете приобрести слайдеры ',
                        add: 'со скидкой 25% (минимум для заказа - 5 штук)'
                    },
                    // {id: 2, value: 'Итоговая цена одного слайдера будет ', add: '150 рублей вместо 200 рублей'},
                    // {id: 3, value: 'Минимальный заказ для применения скидки - всего 5 штук'},
                    {id: 4, value: 'Приобрести слайдеры можно только у меня'},
                    {
                        id: 5,
                        value: 'Будут доступны также новые форматы слайдеров! ',
                        add: '(пока только для учеников курса)'
                    },
                    // {id: 6, add: '* Предложение действительно для заказов из России'},
                    // {id: 7, add: '** Предложение действительно только при покупке онлайн-курса до 28 августа 2022 включительно!'},
                    // {id: 8, add: '*** Скидку можно применить в период с 22 августа 2022 до 30 сентября 2022'},
                ],
                description: [
                    {id: 6, add: '* Предложение действительно для заказов из России'},
                    {
                        id: 7,
                        add: '** Предложение действительно только при покупке онлайн-курса до 28 августа 2022 включительно!'
                    },
                    {id: 8, add: '*** Скидку можно применить в период с 22 августа 2022 по 30 сентября 2022'},
                ]
            },
            {
                id: 2,
                header: 'Про плёнки',
                lessons: [
                    {
                        id: 1,
                        value: 'При покупке курса вы можете приобрести плёнки ',
                        add: 'со скидкой 15% (минимум для заказа - 5 штук)'
                    },
                    // {id: 2, value: 'Итоговая цена одной плёнки будет ', add: '463 рубля вместо 545 рублей'},
                    // {id: 3, value: 'Минимальный заказ для применения скидки - всего 5 штук'},
                    {id: 4, value: 'Приобрести плёнки можно только на официальном сайте ', add: 'www.stampingshop.ru'},
                    // {id: 5, add: '* Предложение действительно для заказов из России'},
                    // {id: 6, add: '** Предложение действительно только при покупке онлайн-курса до 28 августа 2022 включительно!'},
                    // {id: 7, add: '*** Скидку можно применить в период с 22 августа 2022 до 30 сентября 2022'},
                ],
                description: [
                    {id: 6, add: '* Предложение действительно для заказов из России'},
                    {
                        id: 7,
                        add: '** Предложение действительно только при покупке онлайн-курса до 28 августа 2022 включительно!'
                    },
                    {id: 8, add: '*** Скидку можно применить в период с 22 августа 2022 по 30 сентября 2022'},
                ]
            },
        ]
    },
    buy: [{
        id: 1,
        header: 'Магия педикюра',
        price: '5999 рублей',
        sale: '4999 рублей',
        discount: '- 17%',
        // discount: '- 40% SALE!',
        // link: 'https://pedicure-cabinet.online/register',
        link: 'https://pedicure-cabinet.online/sale_magic',
        bullet: [
            {id: 1, value: '- Доступ 60 дней с момента оплаты'},
            // {id: 1, value: '- Только в Новогоднюю Распродажу доступ 100 дней вместо 60 дней'},
            {id: 2, value: '- Обратная связь'},
            {id: 3, value: '- Два сертификата: на русском и на английском'},
            {id: 4, value: '- Обучение на GetCourse'},
        ],
        zaglushka: [
            {id: 1, value: 'Продажи временно приостановлены'},
            {id: 2, value: 'Возобновление продаж курса будет в сентябре!'},
        ],
        additions: [
            {id: 1, value: '+ Доступ к МК "Плёнки" на 60 дней'},
            {id: 2, value: '+ Доступ к МК "Слайдеры" на 60 дней'},
        ]

    },
        {
            id: 2,
            header: 'МК "Плёнки"',
            price: '1999 рублей',
            // sale: '1799 рублей',
            // discount: '- 10%',
            // discount: '- 40% SALE!',
            // link: 'https://pedicure-cabinet.online/wraps',
            link: 'https://pedicure-cabinet.online/wraps',
            bullet: [
                {id: 1, value: '- Доступ 60 дней с момента оплаты'},
                // {id: 1, value: '- Только в Новогоднюю Распродажу доступ 100 дней вместо 60 дней'},
                {id: 2, value: '- Обратная связь'},
                {id: 3, value: '- Сертификат'},
                {id: 4, value: '- Обучение на GetCourse'},
            ],
            zaglushka: [
                {id: 1, value: 'Продажи временно приостановлены'},
                {id: 2, value: 'Возобновление продаж курса будет в сентябре!'},
            ],
            additions: [
                {id: 1, value: 'Подготовка плёнок'},
                {id: 2, value: 'Установка плёнок'},
                {id: 3, value: 'Снятие плёнок'},
                {id: 4, value: 'Одна модель. Две ножки'},
            ]

        },
        {
            id: 3,
            header: ' МК "Слайдеры"',
            price: '1999 рублей',
            sale: '1599 рублей',
            discount: '- 20%',
            // discount: '- 40% SALE!',
            // link: 'https://pedicure-cabinet.online/sliders',
            link: 'https://pedicure-cabinet.online/sale_sliders',
            bullet: [
                {id: 1, value: '- Доступ 60 дней с момента оплаты'},
                // {id: 1, value: '- Только в Новогоднюю Распродажу доступ 100 дней вместо 60 дней'},
                {id: 2, value: '- Обратная связь'},
                {id: 3, value: '- Сертификат'},
                {id: 4, value: '- Обучение на GetCourse'},
            ],
            zaglushka: [
                {id: 1, value: 'Продажи временно приостановлены'},
                {id: 2, value: 'Возобновление продаж курса будет в сентябре!'},
            ],
            additions: [
                {id: 1, value: 'Покрытие ногтей гель-лаком'},
                {id: 2, value: 'Установка слайдеров'},
                {id: 3, value: 'Одна модель. Две ножки'},
            ]
        },
    ]
}

export type IntroductionValuesType = typeof introductionValues