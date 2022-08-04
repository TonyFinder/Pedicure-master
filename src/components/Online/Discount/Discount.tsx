import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import styles from './Discount.module.scss'
import {Input} from '../../common/Input/Input';

const Zoom = require("react-reveal/Zoom")

export const Discount = () => {
    const [filmsQuantity, setFilmsQuantity] = useState<string>('15')
    const [slidersQuantity, setSlidersQuantity] = useState<string>('20')

    return <div className={styles.container}>
        <Zoom cascade>
            <Typography variant={'h2'}
                        className={styles.title}>РАССЧЁТ СКИДКИ НА ПЛЁНКИ И СЛАЙДЕРЫ</Typography>
            <div className={styles.innerContainer}>
                <div className={styles.innerBlock}>
                    <Typography variant={'subtitle1'} className={styles.courseDescription}>Укажите количество плёнок от 5 до 15</Typography>
                    <Input type={'number'} value={filmsQuantity} min={5} max={15} onChangeText={setFilmsQuantity}/>
                    <Typography variant={'subtitle1'} className={styles.courseDescription}>Укажите количество слайдеров от 5 до 20</Typography>
                    <Input type={'number'} value={slidersQuantity} min={5} max={20} onChangeText={setSlidersQuantity}/>
                    <Typography variant={'subtitle1'} className={styles.courseDescription}>Общая сумма заказа плёнок со скидкой: <s>{+filmsQuantity*545} рублей</s> <b>{+filmsQuantity*545*0.75} рублей</b></Typography>
                    <Typography variant={'subtitle1'} className={styles.courseDescription}>Общая сумма заказа слайдеров со скидкой: <s>{+slidersQuantity*200} рублей</s> <b>{+slidersQuantity*200*0.75} рублей</b></Typography>
                    <Typography variant={'subtitle1'} className={styles.courseDescription}>Общая выгода составит: <b>{+slidersQuantity*200*0.25 + +filmsQuantity*545*0.25} рублей</b></Typography>
                </div>
            </div>
        </Zoom>
    </div>
}