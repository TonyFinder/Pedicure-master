import styles from './Training.module.scss';
import Typography from '@mui/material/Typography';
import React from 'react';
import {trainingInfo} from '../../data/store/trainingInfo';

export const Training = () => {
    return(
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Typography variant={'h2'}
                            className={styles.title}>{trainingInfo.header.toUpperCase()}</Typography>
                <div className={styles.valueContainer}>

                </div>
            </div>
        </div>
    )
}