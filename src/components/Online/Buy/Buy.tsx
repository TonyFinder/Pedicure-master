import React from 'react'
import Typography from '@mui/material/Typography';
import styles from './Buy.module.scss'
import {introductionValues} from '../../../data/store/mainPageState';
import {Button} from '../../common/Button/Button';

export const Buy = () => {

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                    <Typography variant={'h1'}
                                className={styles.title}>{introductionValues.buy.header.toUpperCase()}</Typography>
                    <Typography variant={'h2'}
                                className={styles.price}>{introductionValues.buy.price}</Typography>

                <div className={styles.bulletBlock}>
                    {introductionValues.buy.bullet.map(bullet => (
                                    <Typography key={bullet.id} variant={'h3'}
                                                className={styles.bullet}>{bullet.value}</Typography>
                        )
                    )
                    }
                </div>

                <a href={'https://pedicure-cabinet.online/register'}>
                    <Button className={styles.button}>
                        Купить курс
                    </Button>
                </a>

                {/*<div className={styles.bulletBlock}>
                    {introductionValues.buy.zaglushka.map(bullet => (
                            // <Zoom cascade key={bullet.id}>
                            <Typography key={bullet.id} variant={'h3'}
                                        className={styles.bullet}>{bullet.value}</Typography>
                            // </Zoom>
                        )
                    )
                    }
                </div>*/}

            </div>

        </div>
    )
}