import drawing_2 from '../../images/drawings/drawing_2.png'
import drawing_3 from '../../images/drawings/drawing_3.png'
import drawing_4 from '../../images/drawings/drawing_4.png'
import drawing_2_rev from '../../images/drawings/drawing_2_rev.png'
import drawing_3_rev from '../../images/drawings/drawing_3_rev.png'
import drawing_4_rev from '../../images/drawings/drawing_4_rev.png'


export const trainingInfoState = {
    header: 'Индивидуальное обучение',
    title: {
        header: 'Провожу курс повышения квалификации для действующих мастеров на тему',
        description: '"Идеальный эстетический педикюр посредством безопасной аппаратной техники"'
    },
    variants: {
        header: 'Варианты проведения курса',
        row: [
            {name: 'Обработка пальцев', first: true, second: true},
            {name: 'Обработка стопы', first: false, second: true},
            {name: 'Покрытие гель-лак', first: true, second: true},
            {name: 'Дизайн', first: true, second: true},
            {name: 'Одна модель', first: false, second: true},
            {name: 'Две модели', first: true, second: false},
        ],
    },
    bullets: {
        header: 'Выделила для вас самые важные преимущества моего обучения',
        items: [
            {title: 'Оригинальность', description: 'Программу согласовывается индивидуально, исходя из ваших запросов!'},
            {title: 'Вовлечённость', description: '100% моего внимания уделяется только вам!'},
            {title: 'Эффективность', description: 'Разбор всех ваших проблем, ничего лишнего!'},
            {title: 'Информативность', description: 'Обучаемся до последнего вопроса, не ограничено по времени!'},
            {title: 'Грамотность', description: 'Обучаю по-настоящему правильному и безопасному педикюр с идеальным покрытием!'},
            {title: 'Результативность', description: 'Вы получите необходимую картину знаний на выходе!'},
        ],
        images: [
            {id: 6, image: drawing_2_rev},
            {id: 5, image: drawing_3_rev},
            {id: 1, image: drawing_2},
            {id: 4, image: drawing_4},
            {id: 3, image: drawing_3},
            {id: 2, image: drawing_4_rev},
        ],
    },
    restInfo: [
        'Продолжительность курса: 1 день и до последнего вопроса',
        'Дату согласовываем индивидуально',
        'По окончании курса выдаётся сертификат',
        'Обратная связь после окончания курса по любым вопросам',
        'Стоимость обучения: 20.000 рублей',
    ]
}

// types
export type TrainingInfoStateType = typeof trainingInfoState