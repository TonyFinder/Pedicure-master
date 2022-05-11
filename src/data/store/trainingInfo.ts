export const trainingInfo = {
    header: 'Индивидуальное обучение',
    title: {
        header: 'Провожу курс повышения квалификации для действующих мастеров на тему:',
        description: 'Идеальный эстетический педикюр посредством безопасной аппаратной техники'
    },
    variants: {
        header: 'Варианты проведения курса:',
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
        header: 'Выделила для вас самые важные преимущества моего обучения:',
        items: [
            {title: 'Оригинальность', description: 'Программу согласовывается индивидуально, исходя из ваших запросов!'},
            {title: 'Вовлечённость', description: '100% моего внимания уделяется только вам!'},
            {title: 'Эффективность', description: 'Разбор всех ваших проблем, ничего лишнего!'},
            {title: 'Информативность', description: 'Обучаемся до последнего вопроса, не ограничено по времени!'},
            {title: 'Грамотность', description: 'Обучаю по-настоящему правильному и безопасному педикюр с идеальным покрытием!'},
            {title: 'Результативность', description: 'Вы получите необходимую картину знаний на выходе!'},
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
export type TrainingInfoStateType = typeof trainingInfo