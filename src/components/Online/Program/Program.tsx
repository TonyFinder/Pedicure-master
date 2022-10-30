import React from 'react';
import styles from './Program.module.scss'
import Typography from '@mui/material/Typography';
import {introductionValues} from '../../../data/store/mainPageState';


export const Program = () => {

    return (
        <div className={styles.container}>
                <Typography variant={'h2'}
                            className={styles.title}>{introductionValues.program.header.toUpperCase()}</Typography>

            { introductionValues.program.blocks.map(block =>
                <div key={block.id} className={styles.innerContainer}>
                    <div className={styles.innerBlock}>
                        <Typography variant={'h3'}
                                    className={styles.practiceTitle}>{block.header.toUpperCase()}</Typography>

                        <div className={styles.lessonsBlock}>
                        { block.lessons.map(lesson =>
                            <Typography key={lesson.id} variant={'subtitle1'}
                                        className={styles.lessons}><span>{lesson.mark}</span>{lesson.value}</Typography>
                        )
                        }
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )
}