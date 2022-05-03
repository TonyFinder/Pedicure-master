import React from 'react';
import styles from './Price.module.scss'
import Typography from '@mui/material/Typography';
import {priceForPedicure} from '../../data/priceForPedicure';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

export const Price = () => {

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Typography variant={'h2'}
                            className={styles.title}>{priceForPedicure.header.toUpperCase()}</Typography>
                <div className={styles.valueContainer}>
                    {priceForPedicure.priceList.map((procedure, index) => (
                        <div key={index} className={styles.block}>
                            <Divider className={styles.divider}>
                                <Chip label={`${procedure.price} рублей`} className={styles.chip}/>
                            </Divider>
                            <Typography variant={'subtitle1'}
                                        className={styles.description}>{procedure.item}</Typography>
                        </div>
                    ))}
                </div>
                <Typography className={styles.restInfo}><sup>*</sup>{priceForPedicure.restInfo[0]}</Typography>
                <Typography className={styles.restInfo}><sup>**</sup>{priceForPedicure.restInfo[1]}</Typography>
            </div>
        </div>
    )
}