import React from 'react';
import styles from './TrainingIntroduction.module.scss';
import Typography from '@mui/material/Typography';
import {trainingInfoState} from '../../../data/store/trainingInfoState';
import KeyboardDoubleArrowDownTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowDownTwoTone';

export const TrainingIntroduction = () => {
    return (
        <div className={styles.container}>
            <Typography variant={'h2'}
                        className={styles.title}>{trainingInfoState.header.toUpperCase()}</Typography>
            <div className={styles.innerContainer}>
                <div className={styles.innerBlock}>
                    <Typography variant={'h3'}
                                className={styles.courseTitle}>{trainingInfoState.title.header.toUpperCase()}</Typography>
                    <Typography variant={'subtitle1'}
                                className={styles.courseDescription}>{trainingInfoState.title.description}</Typography>
                </div>
            </div>
            <KeyboardDoubleArrowDownTwoToneIcon color={'primary'} fontSize={'large'} sx={{marginTop: '50px'}}/>
        </div>
    );
};