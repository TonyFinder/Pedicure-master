import styles from './Offer.module.scss';
import Typography from '@mui/material/Typography';
import {Button} from '../../../common/Button/Button';
import React from 'react';

type BuyPropsType = {
    header: string
    price: string
    sale?: string
    additions?: {
        id: number
        value: string
    }[]
    bullets: {
        id: number
        value: string
    }[]
    link: string
}

export const Offer: React.FC<BuyPropsType> = (
    {header, price, sale, bullets, additions, link}
) => {

    return (
        <div className={styles.innerContainer}>
            <Typography variant={'h1'}
                        className={styles.title}>{header.toUpperCase()}</Typography>
            <Typography variant={'h2'}
                        className={styles.price}>{price}</Typography>
            <Typography variant={'h2'}
                        className={styles.sale}>{sale}</Typography>


            <div className={styles.bulletBlock}>
                {bullets.map(bullet => (
                        <Typography key={bullet.id} variant={'h3'}
                                    className={styles.bullet}>{bullet.value}</Typography>
                    )
                )
                }
            </div>

            {additions &&
                <div className={styles.additions}>
                {additions.map(addition => (
                        <Typography key={addition.id} variant={'h3'}
                                    className={styles.addition}>{addition.value}</Typography>
                    )
                )
                }
            </div>
            }

            <a href={link}>
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
    )
}