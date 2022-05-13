import styles from './AboutMe.module.scss';
import {mainPageImages} from '../../../data/store/restImages';
import React from 'react';
import Typography from '@mui/material/Typography';
import {introductionValues} from '../../../data/store/mainPageState';

export const AboutMe = () => {
    // console.log("AboutMe")

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Typography variant={'h2'}
                            className={styles.title}>{introductionValues.greetings.header.aboutMe.toUpperCase()}</Typography>
                <div className={styles.imageOnTop}>
                    <img src={mainPageImages.introduction} alt={'introduction'}/>
                </div>
                {introductionValues.pictures.map(value => (
                    <div className={styles.valueContainer} key={value.id}>
                        <div className={styles.images}>
                            <img src={value.image} alt={'nails'}/>
                        </div>
                        <Typography variant={'subtitle1'} className={styles.description}>{value.value}</Typography>
                    </div>
                ))
                }
            </div>
        </div>
    )
}