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
            bullet: 'Идеально',
            info: 'Чистая обработка пальчиков'
        },
        {
            bullet: 'Эффектно',
            info: 'Трендовый дизайн от которого не оторвать глаз'
        },
        {
            bullet: 'Доступно',
            info: 'Сможет каждый, имея правильный подход'
        },
    ],
    youWillKnow: {
        first: {
            description: 'Пройдя данный курс, вы поймёте:',
            info: [
                {id: 1, value: 'как безопасно обрабатывать пальчики'},
                {id: 2, value: 'как сделать так, чтобы клиент повторно приходил с чистым околоногтевым пространством'},
                {id: 3, value: 'все нюансы и фишки в работе с плёнками и слайдерами'},
            ],
        },
        second: {
            description: 'а также:',
            info: [
                {id: 1, value: 'покажу вам все материалы и инструменты, которыми я пользуюсь и ссылки где их приобретаю'},
                {id: 2, value: 'обратная связь и ответы на вопросы касаемо курса'},
                {id: 3, value: 'сертификат прохождения курса'},
            ],
        }
    },
    pictures: [
        {id: 1, image: nails17, value: 'Практикующий мастер педикюра с 2018 года.'},
        {id: 2, image: nails14, value: 'Непрерывно совершенствую себя как мастер и преподаватель.'},
        {id: 3, image: nails11, value: 'Провожу индивидуальные курсы по педикюру с 2021 года.'},
        {id: 4, image: nails3, value: 'Практикую исключительно безопасный педикюр.'},
        // {id: 4, image: nails3, value: 'Готовлю ОНЛАЙН-КУРС по обработке и дизайну ногтей.'},
        // {id: 5, image: nails12, value: 'Продаю только проверенную косметику.'},
    ],
    greetings: {
        header: {
            anna: 'Здравствуйте, меня зовут Анна!',
            aboutMe: 'Немного обо мне'
        },
        description: [
            'Автор курса "Магия педикюра"',
            // 'Здесь вы найдёте информацию исключительно про педикюр.',
            // 'Я безумно рада, что нашла своё призвание.',
            // "С удовольствием делюсь опытом со своими учениками!",
        ],
        restInfo: ""
        // restInfo: "В левом верхнем углу вы найдёте меню с более подробной информацией."
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
        first: {
            header: 'Практика “Плёнки”',
            lessons: [
                {id: 1, value: 'Снятие старого покрытия'},
                {id: 2, value: 'Работа с длиной и формой'},
                {id: 3, value: 'Подготовка к работе фрезами'},
                {id: 4, value: 'Работа фрезами: цилиндр, капля, шар'},
                {id: 5, value: 'Нанесение базы'},
                {id: 6, value: 'Подготовка плёнок к работе'},
                {id: 7, value: 'Установка плёнок'},
                {id: 8, value: 'Снятие плёнок'},
                {id: 9, value: 'Обработка фото'},
            ]
        },
        second: {
            header: 'Практика “Слайдеры”',
            lessons: [
                {id: 1, value: 'Подготовка к покрытию'},
                {id: 2, value: 'Покрытие: база и гель-лак'},
                {id: 3, value: 'Установка слайдеров'},
            ]
        },
        third: {
            header: 'Презентация “Материалы, инструменты, оборудование”',
            lessons: [
                {id: 1, value: 'Покажу только те материалы, инструменты и оборудование, которые использую в работе'},
                {id: 2, value: 'Вставлю ссылки на всё, что будет в презентации'},
                {id: 3, value: 'И много другой полезной информации'},
            ]
        },
        forth: {
            header: 'Доступ к курсу',
            lessons: [
                {id: 1, value: 'Платформа getCourse'},
                {id: 2, value: 'Доступ на 3 месяца'},
            ]
        }
    },
    discount: {
        header: 'Приятные дополнения к курсу',
        first: {
            header: 'Про слайдеры”',
            lessons: [
                {id: 1, value: 'В первый месяц обучения вы можете приобрести слайдеры со скидкой 25%'},
                {id: 2, value: 'Итоговая цена одного слайдера будет 150 рублей вместо 200 рублей'},
                {id: 3, value: 'Минимальный заказ для применения скидки - всего 5 штук'},
                {id: 4, value: 'Приобрести слайдеры можно только у @pedicure.cabinet, то есть у меня'},
                {id: 5, value: 'Будут доступны новые форматы слайдеров!'},
                {id: 6, value: 'Предложение действительно для заказов из России'},
            ]
        },
        second: {
            header: 'Про плёнки',
            lessons: [
                {id: 1, value: 'В первый месяц обучения вы можете приобрести плёнки со скидкой 15%'},
                {id: 2, value: 'Итоговая цена одной плёнки будет  463 рубля вместо 545 рублей'},
                {id: 3, value: 'Минимальный заказ для применения скидки - всего 5 штук'},
                {id: 4, value: 'Приобрести плёнки можно только у на официальном сайте www.stampingshop.ru'},
                {id: 5, value: 'Предложение действительно для заказов из России'},
            ]
        },
    }
}

export type IntroductionValuesType = typeof introductionValues