import styles from './Introduction.module.scss';
import {mainPageImages} from '../../../data/store/restImages';
import React from 'react';
import Typography from '@mui/material/Typography';
import {introductionValues} from '../../../data/store/mainPageState';
import Tilt from 'react-parallax-tilt';

export const Introduction = () => {
    // console.log("Introduction")

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Tilt>
                    <div className={styles.image}>
                        <img src={mainPageImages.anna} alt={'author'}/>
                    </div>
                </Tilt>
                <div className={styles.greetings}>
                    <Typography variant={'h1'}
                                className={styles.title}>{introductionValues.greetings.header.anna.toUpperCase()}</Typography>
                    <div>
                        {introductionValues.greetings.description.map((description, index) => (
                            <Typography key={index} className={styles.mainSign}>{description}</Typography>
                        ))}
                        <Typography
                            className={styles.directionToMenu}>{introductionValues.greetings.restInfo}</Typography>
                        <Typography className={styles.directionToMenu}>
                            <a href={'https://www.instagram.com/pedicure.cabinet'} target={'_blank'} rel="noreferrer">@pedicure.cabinet</a>
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

