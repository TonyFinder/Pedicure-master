import React from 'react';
import styles from './Benefits.module.scss';
import Typography from '@mui/material/Typography';
import {trainingInfoState} from '../../../data/store/trainingInfoState';


export const Benefits = () => {
    const data = trainingInfoState.bullets

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Typography variant={'h2'}
                            className={styles.title}>{data.header.toUpperCase()}</Typography>

                {data.items.map((value, index) => (
                    <div className={styles.valueContainer} key={index}>
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
                ))
                }
            </div>
        </div>
    );
};