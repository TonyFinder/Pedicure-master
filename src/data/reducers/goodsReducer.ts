import {goodsImages} from '../images';

let initialGoodsState = {
    chosenCategory: [
        {id: 1, category: 'drySkin', active: false},
        {id: 2, category: 'wetSkin', active: false},
    ],
    drySkin: [{
        id: 1,
        title: 'Крем. Питание и Восстановление',
        pictureUrl: goodsImages['372'],
        description: {
            action: ['Мгновенное и продолжительное увлажнение 24 часа', 'Заживление дефектов, заметное сокращение гиперкератоза за 7 дней', 'Значительное улучшение состояния сухой и грубой кожи через две недели', 'Восстановление кожи', 'Легко впитывается, не липкий, без парабенов'],
            ingredients: ['Масло ши, масло макадамии и растительный глицерин: увлажнение, питание и восстановление кожи', 'Конский каштан и масло арники улучшают оксигенацию тканей, стимулируют микроциркуляцию, снимают воспаления', 'Ипарзин® 4А – эксклюзивный ингредиент, поддерживает молодость и  восстановление кожи, снимает воспаления'],
            applying: ['Применять 1-2 раза в день. Нанести на сухую чистую кожу, впитать массажными движениями.'],
        },
        variety: [{id: 372, volume: '50 мл', price: '1000 руб'}, {id: 306, volume: '150 мл', price: '2250 руб'},],
    }, {
        id: 2,
        title: 'Бальзам. Гидро-защита',
        pictureUrl: goodsImages['832'],
        description: {
            action: ['Решает проблему сильно обезвоженной кожи с жесткими ороговениями и гиперкератозом', 'Интенсивно увлажняет с первого применения', 'Заметно снижает гиперкератоз уже за 7 дней', 'Снижает риск инфекции, восстанавливает естественный защитный барьер кожи'],
            ingredients: ['Масла рыжика посевного (Camelina Sativa) и виноградных косточек восстанавливают защитные функции кожи', 'Императа цилиндрическая обладает мощным увлажняющим действием', 'Липестеры®* шелка, серин и провитамин B5 защищают кожу от бактерий, увлажняют и предотвращают образование гиперкератоза'],
            applying: ['Наносить на сухую чистую кожу стопы 1-2 раза в день, впитывать массажными движениями. Быстро впитывается, не оставляет пленку на коже.'],
        },
        variety: [{id: 832, volume: '125 мл', price: '1150 руб'},],
    }, {
        id: 3,
        title: 'Бальзам. Идеальная гладкость',
        pictureUrl: goodsImages['1111'],
        description: {
            action: ['Интенсивное увлажение с первого применения, подтвержденное корнеометрией', 'За неделю применения заживляет мелкие трещины', 'Разглаживает проявления гиперкератоза', 'Создаёт эффект гладкой, увлажнённой и восстановленной кожи'],
            ingredients: ['Масло виноградной косточки восстанавливает барьерную функцию кожи, сокращает трансэпидермальную потерю влаги', 'Мочевина 15% обладает кератолитическим и отшелушивающим эффектом, стимулирует обновление эпидермиса', 'Папаин – энзим с отшелушивающим эффектом', 'Экстракт императы цилиндрической – растения из пустыни с мощным увлажняющим действием', 'Аллантоин увлажняет, успокаивает и заживляет микроповреждения'],
            applying: ['Наносить утром и вечером на чистую кожу стопы, впитать массажными движениями. Приятная консистенция облегчает полное впитывание.'],
        },
        variety: [{id: 1111, volume: '75 мл', price: '1200 руб'}, {id: 991312, volume: '150 мл', price: '2250 руб'},],
    }, {
        id: 4,
        title: 'Бальзам от трещин',
        pictureUrl: goodsImages['991039'],
        description: {
            action: ['Способствует заживлению трещин', 'Видимые улучшения с первой недели', 'Увлажняет кожу, предотвращает образование гиперкератоза (натоптышей)', 'Дает облегчение при болезненных трещинах с первой недели', 'Снимает воспаления'],
            ingredients: ['Липестеры® шелка и серина предотвращают гиперкератоз', 'D-пантенол, центелла азиатская ускоряют заживление', 'Полиненасыщенные жирные кислоты восстанавливают липидный барьер', 'Растительный глицерин, пчелиный воск увлажняют кожу', 'Эноксолон (экстракт корня лакрицы) снимает воспаления и зуд'],
            applying: ['Наносить 2 раза в день локально в области трещин или гиперкератоза'],
        },
        variety: [{id: 991039, volume: '75 мл', price: '1250 руб'},],
    }, {
        id: 5,
        title: 'Крем для ног. Лечебный',
        pictureUrl: goodsImages['111'],
        description: {
            action: ['Повышает уровень увлажненности', 'Помогает в процессе омоложения клеток и заживления кожи', 'Балансирует PH кожи и нейтрализует запахи', 'Легко впитывается и обеспечивает немедленное облегчение', 'Эффективен при снижении и успокаивании раздражения и покраснения'],
            ingredients: ['Масло ши и пчелиный воск питают и защищают кожу, обволакивая её защитным эластичным слоем', 'Конский каштан и кофеин улучшают кровообращение, выводят токсины и уменьшают отек ног', 'Активный ингредиент - кофеин, известный антиоксидант и естественный источник витамина В3'],
            applying: ['Наносить на чистые, сухие ноги, хорошо втирать, концентрируя внимание на проблемных зонах. В крайних случаях сухости и потрескавшейся кожи рекомендуется использовать два раза в день.'],
        },
        variety: [{id: 111, volume: '75 мл', price: '1850 руб'},],
    }, {
        id: 6,
        title: 'Крем для рук. Защитный',
        pictureUrl: goodsImages['222'],
        description: {
            action: ['Успокаивает и балансирует уровень PH кожи', 'Помогает осветлять существующие пигментные пятна и предотвращает будущие', 'Формула содержит солнцезащитный экран, эффективный против UVA/UVB лучей для максимальной защиты кожи от воздействия солнца'],
            ingredients: ['Экстракты растений Амазонии. Повышает влагоудерживающие способности кожи и предотвращает потерю воды. Ругенерация кожи, снижает концентрацию меланина в пигментных пятнах', 'Экстракт морских водорослей. Богат питательными веществами и аминокислотами. Повышает уровень влаги в коже. Антиоксидант'],
            applying: ['Нанести на чистые, сухие руки и хорошо помассировать до полного впитывания. Рекомендуется повторно наносить крем после мытья рук или до пребывания на солнце.'],
        },
        variety: [{id: 222, volume: '75 мл', price: '1450 руб'}, {id: 223, volume: '150 мл', price: '2300 руб'},],
    },],
    wetSkin: [{
        id: 7,
        title: 'Гель. Антиперспирант',
        pictureUrl: goodsImages['889'],
        description: {
            action: ['Регулирует потоотделение и нейтрализует неприятные запахи, дарит приятное ощущение прохлады «горящей» стопе', 'Эффективен даже при патологическом гипергидрозе'],
            ingredients: ['Липоаминокислоты регулируют потоотделение не нарушая естественный pH и физиологию кожи', 'Экстракт лишайника обладает антибактериальным действием, предотвращает развитие неприятных запахов, возникающих из-за разложения пота бактериями', 'Двойная система поглощения запахов поглощает и нейтрализует неприятные запахи с момента их появления'],
            applying: ['Применять 1-2 раза в день. Нанести на сухую чистую кожу стопы, уделяя внимание пространству между пальцами. Впитать массажными движениями.'],
        },
        variety: [{id: 889, volume: '75 мл', price: '1200 руб'},],
    }, {
        id: 8,
        title: 'Крем. Антиперспирант',
        pictureUrl: goodsImages['367'],
        description: {
            action: ['Быстро регулирует сильное потоотделение, защищает кожу от раздражения и агрессивного воздействия пота', 'Формула приспособлена для очень чувствительной кожи: подходит для детей от 6 лет и взрослых с чувствительной кожей (микозы, мацерация, сахарный диабет)'],
            ingredients: ['Липестеры® шелка и серина – запатентованная противогрибковая формула защищает и дезодорирует кожу', 'Липоаминокислота C8G/Al – производная глицина, аминокислота с заживляющим действием'],
            applying: ['Применять 1-2 раза в день. Нанести на сухую чистую кожу стопы, уделяя внимание пространству между пальцами.'],
        },
        variety: [{id: 367, volume: '50 мл', price: '1200 руб'},],
    }, {
        id: 9,
        title: 'Спрей. Антиперспирант',
        pictureUrl: goodsImages['888'],
        description: {
            action: ['Мгновенный освежающий эффект', 'Регулирует потоотделение и неприятные запахи', 'Надежно действует в течение всего дня', 'Имеет приятный запах, очень прост и комфортен в применении'],
            ingredients: ['Хлоргидрат алюминия, соли аллантоина регулируют потоотделение, снижают раздражение кожи', 'Экстракт лишайника с высоким содержанием усниновой кислоты, мощного природного антибактериального средства, предотвращает развитие запахов, возникающих из-за разложения пота бактериями', 'Двойная система поглощения запахов поглощает и нейтрализует неприятные запахи с момента их появления'],
            applying: ['Применять 1 раз в день по утрам. Нанести на сухую чистую кожу стопы. Дать высохнуть на коже одну минуту.'],
        },
        variety: [{id: 888, volume: '100 мл', price: '1650 руб'},],
    }, {
        id: 10,
        title: 'Спрей для обуви',
        pictureUrl: goodsImages['369'],
        description: {
            action: ['Антисептик, который дезодорирует и дезинфицирует внутреннюю поверхность обуви', 'Обеспечивает приятное ощущение чистоты на продолжительное время', 'Увеличивает срок службы обуви', 'Предупреждает развитие инфекций, обладает антибактериальным эффектом', 'Эффективен против плесени, дрожжей, дерматофитов'],
            ingredients: ['Липестеры® шелка и серина – запатентованная противогрибковая формула, защищает и дезодорирует кожу', 'Липоаминокислота C8G/Al – производная глицина, аминокислота с заживляющим действием – регулирует потоотделение, не нарушая pH и физиологию кожи', 'Мелкодисперсный тальк создает защитную пленку, впитывает влагу.'],
            applying: ['Вечером распылить средство на внутреннюю поверхность обуви и оставить на ночь. Специальная форсунка позволяет использовать его даже в полностью перевернутом положении. Можно использовать для обуви детей от 3-х лет.'],
        },
        variety: [{id: 369, volume: '150 мл', price: '2050 руб'},],
    },],
}

export const goodsReducer = (state: InitialGoodsStateType = initialGoodsState, action: ActionType): InitialGoodsStateType => {
    switch (action.type) {
        case 'CHOOSE-CATEGORY':
            return {
                ...state,
                chosenCategory:
                    state.chosenCategory.map(category => category.category === action.category || action.category === 'all'
                        ? {...category, active: true}
                        : {...category, active: false})
            }
        default:
            return state
    }
}


// actions
export const chooseCategoryAC = (category: string) => ({type: 'CHOOSE-CATEGORY', category} as const)


// types
type ActionType = ReturnType<typeof chooseCategoryAC>
export type InitialGoodsStateType = typeof initialGoodsState
export type VarietyType = {
    id: number
    volume: string
    price: string
}
export type ItemType = {
    id: number
    title: string
    pictureUrl: string
    description: {
        action: string[]
        ingredients: string[]
        applying: string[]
    }
    variety: VarietyType[]
}