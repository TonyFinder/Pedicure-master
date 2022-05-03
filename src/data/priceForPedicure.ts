export const priceForPedicure = {
    priceList: [
        {
            item: 'Обработка пальчиков или стопы  без покрытия',
            price: 1800
        },
        {
            item: 'Обработка  стопы и пальчиков без покрытия',
            price: 2300
        },
        {
            item: 'Обработка пальчиков с покрытием гель-лак',
            price: 2500
        },
        {
            item: 'Обработка стопы и пальчиков с покрытием гель-лак',
            price: 3000
        },
    ],
    header: 'Аппаратный педикюр',
    restInfo: [
        'Дизайн оплачивается отдельно',
        'Снятие покрытия от другого мастера - 200 рублей'
        ]
}

// types
export type priceForPedicureType = typeof priceForPedicure
