import styles from './Info.module.scss';
import Typography from '@mui/material/Typography';
import React from 'react';
import {Button} from '../common/Button/Button';

export const Info = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Typography variant={'h2'}
                            className={styles.title}>Инструкцию к слайдерам и плёнкам вы можете посмотреть по ссылкам
                    ниже</Typography>

                <div className={styles.buttons}>
                    <div className={styles.wrapper}>
                        <a href={'https://docs.google.com/document/d/1RXjcUDmYE-cBChHPrQV_ppneC__BR9d2pzCdoM7Uqg0/edit?usp=sharing'}
                           target="_blank" rel="noreferrer">
                            <Button className={styles.button}>
                                Слайдеры
                            </Button>
                        </a>
                    </div>

                    <div className={styles.wrapper}>
                        <a href={'https://docs.google.com/document/d/1G7pTT5Wy6VxVzVAUJekBOARfGa2yYTFnDvZk5FowapY/edit?usp=sharing'} target="_blank" rel="noreferrer">
                            <Button className={styles.button}>
                                Плёнки
                            </Button>
                        </a>
                    </div>
                </div>

                <Typography variant={'h6'}
                            className={styles.additionalInfo}>*На моём сайте вы также можете найти всю информацию по <b>Онлайн-Курсам</b> и <b>Мои Контакты!</b></Typography>
            </div>
        </div>
    )
}