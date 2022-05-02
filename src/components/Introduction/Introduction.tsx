import styles from './Introduction.module.scss';
import {images, introductionValues} from '../../data/images';
import React from 'react';
import Typography from '@mui/material/Typography';

export const Introduction = () => {

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src={images.anna} alt={'author'}/>
                </div>
                <div className={styles.greetings}>
                    <Typography variant={'h1'}
                                className={styles.header}>{introductionValues.greetings.header.anna.toUpperCase()}</Typography>
                    <div>
                        {introductionValues.greetings.description.map((description, index) => (
                            <Typography key={index} className={styles.mainSign}>{description}</Typography>
                        ))}
                        <Typography
                            className={styles.directionToMenu}>{introductionValues.greetings.restInfo}</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

