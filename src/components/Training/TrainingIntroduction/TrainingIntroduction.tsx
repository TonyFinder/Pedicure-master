import React from 'react';
import styles from './TrainingIntroduction.module.scss';
import Typography from '@mui/material/Typography';
import {trainingInfo} from '../../../data/store/trainingInfo';
import KeyboardDoubleArrowDownTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowDownTwoTone';

export const TrainingIntroduction = () => {
    return (
        <div className={styles.container}>
            <Typography variant={'h2'}
                        className={styles.title}>{trainingInfo.header.toUpperCase()}</Typography>
            <div className={styles.innerContainer}>
                <div className={styles.innerBlock}>
                    <Typography variant={'h3'}
                                className={styles.courseTitle}>{trainingInfo.title.header.toUpperCase()}</Typography>
                    <Typography variant={'subtitle1'}
                                className={styles.courseDescription}>{trainingInfo.title.description}</Typography>
                </div>
            </div>
            <KeyboardDoubleArrowDownTwoToneIcon color={'primary'} fontSize={'large'} sx={{marginTop: '50px'}}/>
        </div>
    );
};