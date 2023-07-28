import styles from './Info.module.scss';
import Typography from '@mui/material/Typography';
import React from 'react';

export const Info = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Typography variant={'h2'}
                            className={styles.title}>ИНФОРМАЦИЯ</Typography>
{/*
                <div className={styles.imageOnTop}>
                    <img src={mainPageImages.introduction} alt={'introduction'}/>
                </div>
*/}
            </div>
        </div>
    )
}