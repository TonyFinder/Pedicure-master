import React from 'react'
import Typography from '@mui/material/Typography';
import styles from './Buy.module.scss'
import {introductionValues} from '../../../data/store/mainPageState';
import {Button} from '../../common/Button/Button';

// const Zoom = require("react-reveal/Zoom")

export const Buy = () => {
    // console.log("IntroOnline")

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                {/*<Zoom cascade>*/}
                    <Typography variant={'h1'}
                                className={styles.title}>{introductionValues.buy.header.toUpperCase()}</Typography>
                {/*</Zoom>*/}
                {/*<Zoom cascade>*/}
                    <Typography variant={'h2'}
                                className={styles.price}>{introductionValues.buy.price}</Typography>
                {/*</Zoom>*/}

                <div className={styles.bulletBlock}>
                    {introductionValues.buy.bullet.map(bullet => (
                                // <Zoom cascade key={bullet.id}>
                                    <Typography key={bullet.id} variant={'h3'}
                                                className={styles.bullet}>{bullet.value}</Typography>
                                // </Zoom>
                        )
                    )
                    }
                </div>

                <a href={'https://pedicure-cabinet.online/register'}>
                    <Button className={styles.button}>
                        Купить курс
                    </Button>
                </a>

            </div>

        </div>
    )
}