import styles from './Introduction.module.scss';
import {images, introductionValues} from '../../data/images';
import React from 'react';
import Typography from '@mui/material/Typography';

export const Introduction = () => {

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={images.anna} alt={'author'}/>
            </div>
            <div className={styles.introduction}>
                <Typography variant={'h4'} className={styles.header}>Привет, это Аня, давайте знакомиться!</Typography>
                {introductionValues.map(value => (
                    <div className={styles.valueContainer} key={value.id}>
                        <div className={styles.images}>
                            <img src={value.image} alt={'nails'}/>
                        </div>
                        <div className={styles.value}>
                            <Typography variant={'subtitle1'}>{value.value}</Typography>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

// types