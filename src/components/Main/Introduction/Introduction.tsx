import styles from './Introduction.module.scss';
import {mainPageImages} from '../../../data/store/restImages';
import React from 'react';
import Typography from '@mui/material/Typography';
import {introductionValues} from '../../../data/store/mainPageState';
import Tilt from 'react-parallax-tilt';

const Zoom = require("react-reveal/Zoom")

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
                <Zoom cascade>
                    <div className={styles.greetings}>
                        <Typography variant={'h1'}
                                    className={styles.title}>{introductionValues.greetings.header.anna.toUpperCase()}</Typography>
                        <div>
                            <Typography className={styles.author}>{introductionValues.greetings.author}</Typography>
                            <Typography className={styles.mainSign}>{introductionValues.greetings.description}</Typography>
                            <Typography className={styles.directionToMenu}>
                                <a href={'https://www.instagram.com/pedicure.cabinet'} target={'_blank'}
                                   rel="noreferrer">@pedicure.cabinet</a>
                            </Typography>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

