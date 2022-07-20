import React from 'react';
import styles from './Benefits.module.scss';
import Typography from '@mui/material/Typography';
import {trainingInfoState} from '../../../data/store/trainingInfoState';

const Zoom = require("react-reveal/Zoom")

export const Benefits = () => {
    // console.log("Benefits")

    const data = trainingInfoState.bullets

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Zoom cascade>
                    <Typography variant={'h2'}
                                className={styles.title}>{data.header.toUpperCase()}</Typography>
                </Zoom>

                {data.items.map((value, index) => (
                    <Zoom key={index} cascade>
                        <div className={styles.valueContainer}>
                            <div className={styles.images}>
                                <img src={data.images[index].image} alt={'nails'}/>
                            </div>
                            <div className={styles.bullet}>
                                <Typography variant={'h3'}
                                            className={styles.bulletTitle}>{value.title.toUpperCase()}</Typography>
                                <Typography variant={'subtitle1'}
                                            className={styles.bulletDescription}>{value.description}</Typography>
                            </div>
                        </div>
                    </Zoom>
                ))
                }
            </div>
        </div>
    );
};