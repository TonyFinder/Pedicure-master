import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import styles from './Discount.module.scss'
import Input from '@mui/material/Input';

const Zoom = require("react-reveal/Zoom")

export const Discount = () => {
    const [filmsQuantity, setFilmsQuantity] = useState<number>(15)
    const [slidersQuantity, setSlidersQuantity] = useState<number>(20)

    return <div className={styles.container}>
        <Zoom cascade>
            <Typography variant={'h2'}
                        className={styles.title}>РАССЧЁТ СКИДКИ НА ПЛЁНКИ И СЛАЙДЕРЫ</Typography>
            <div className={styles.innerContainer}>
                <div className={styles.innerBlock}>
                    <Typography variant={'subtitle1'} className={styles.courseDescription}>Количество плёнок</Typography><Input type={'number'} />
                </div>
            </div>
        </Zoom>
    </div>
}