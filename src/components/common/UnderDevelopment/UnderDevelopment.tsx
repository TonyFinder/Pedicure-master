import React from 'react';
import styles from './UnderDevelopment.module.scss'
import Typography from '@mui/material/Typography';

export const UnderDevelopment = () => {

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Typography variant={'h2'}
                            className={styles.title}>СТРАНИЦА В РАЗРАБОТКЕ</Typography>
            </div>
        </div>
    )
}