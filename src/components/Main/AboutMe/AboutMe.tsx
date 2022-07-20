import styles from './AboutMe.module.scss';
import {mainPageImages} from '../../../data/store/restImages';
import React from 'react';
import Typography from '@mui/material/Typography';
import {introductionValues} from '../../../data/store/mainPageState';

const Fade = require("react-reveal/Fade")

export const AboutMe = () => {
    // console.log("AboutMe")

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Fade top>
                    <Typography variant={'h2'}
                                className={styles.title}>{introductionValues.greetings.header.aboutMe.toUpperCase()}</Typography>
                </Fade>
                <div className={styles.imageOnTop}>
                    <img src={mainPageImages.introduction} alt={'introduction'}/>
                </div>
                {introductionValues.pictures.map(value => (
                    <Fade key={value.id} bottom>
                        <div className={styles.valueContainer}>
                            <div className={styles.images}>
                                <img src={value.image} alt={'nails'}/>
                            </div>
                            <Typography variant={'subtitle1'} className={styles.description}>{value.value}</Typography>
                        </div>
                    </Fade>
                ))
                }
            </div>
        </div>
    )
}