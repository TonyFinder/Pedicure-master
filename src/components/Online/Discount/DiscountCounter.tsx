import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import styles from './DiscountCounter.module.scss'
import {Input} from '../../common/Input/Input';
import {Button} from '../../common/Button/Button';

const Zoom = require("react-reveal/Zoom")

export const DiscountCounter = () => {
    const [filmsQuantity, setFilmsQuantity] = useState<string>('15')
    const [slidersQuantity, setSlidersQuantity] = useState<string>('20')
    const [buttonValue, setButtonValue] = useState<boolean>(false)

    return <div className={styles.container}>
        <Zoom cascade>
            <Typography variant={'h2'}
                        className={styles.title}>ХОЧЕШЬ ПОСМОТРЕТЬ СКИДКУ В ЦИФРАХ?</Typography>
            <Button onClick={()=>setButtonValue(!buttonValue)}>{buttonValue ? 'Скрыть' : 'Показать'}</Button>
        </Zoom>
            { buttonValue &&
                <div className={styles.innerContainer}>
                    <div className={styles.innerBlock}>
                        <Typography variant={'subtitle1'} className={styles.courseDescription}>Укажите количество
                            плёнок</Typography>
                        <Typography variant={'subtitle1'} className={styles.courseDescription}>Обычная цена 545
                            рублей</Typography>
                        <Input type={'number'} value={filmsQuantity} min={5} onChangeText={setFilmsQuantity}/>
                        <Typography variant={'subtitle1'} className={styles.courseDescription}>Укажите количество
                            слайдеров</Typography>
                        <Typography variant={'subtitle1'} className={styles.courseDescription}>Обычная цена 200
                            рублей</Typography>
                        <Input type={'number'} value={slidersQuantity} min={5} onChangeText={setSlidersQuantity}/>
                        <Typography variant={'subtitle1'} className={styles.courseDescription}>Общая сумма заказа плёнок
                            со скидкой: <s>{+filmsQuantity * 545} рублей</s> <b>{+filmsQuantity * 545 * 0.75} рублей</b></Typography>
                        <Typography variant={'subtitle1'} className={styles.courseDescription}>Общая сумма заказа
                            слайдеров со скидкой: <s>{+slidersQuantity * 200} рублей</s>
                            <b>{+slidersQuantity * 200 * 0.75} рублей</b></Typography>
                        <Typography variant={'subtitle1'} className={styles.courseDescription}>Общая выгода
                            составит: <b>{+slidersQuantity * 200 * 0.25 + +filmsQuantity * 545 * 0.25} рублей</b></Typography>
                    </div>
                </div>
            }
    </div>
}