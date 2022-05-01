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
            <div className={styles.introduction}>
                <Typography variant={'h2'}
                            className={styles.aboutMe}>{introductionValues.greetings.header.aboutMe.toUpperCase()}</Typography>
                <div className={styles.imageIntroduction}>
                    <img src={images.introduction} alt={'introduction'}/>
                </div>
                {introductionValues.pictures.map(value => (
                    <div className={styles.valueContainer} key={value.id}>
                        <div className={styles.images}>
                            <img src={value.image} alt={'nails'}/>
                        </div>
                        <Typography variant={'subtitle1'} className={styles.value}>{value.value}</Typography>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

// types