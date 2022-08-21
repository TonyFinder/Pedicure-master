import React from 'react';
import styles from './Program.module.scss'
import Typography from '@mui/material/Typography';
import {introductionValues} from '../../../data/store/mainPageState';

// const Zoom = require("react-reveal/Zoom")

export const Program = () => {
    // console.log("Program")

    return (
        <div className={styles.container}>
            {/*<Zoom cascade>*/}
                <Typography variant={'h2'}
                            className={styles.title}>{introductionValues.program.header.toUpperCase()}</Typography>
            {/*</Zoom>*/}

            { introductionValues.program.blocks.map(block =>
                // <Zoom cascade key={block.id}>
                <div key={block.id} className={styles.innerContainer}>
                    <div className={styles.innerBlock}>
                        {/*<Zoom cascade>*/}
                        <Typography variant={'h3'}
                                    className={styles.practiceTitle}>{block.header.toUpperCase()}</Typography>
                        {/*</Zoom>*/}

                        <div className={styles.lessonsBlock}>
                        { block.lessons.map(lesson =>
                            // <Zoom cascade key={lesson.id}>
                            <Typography key={lesson.id} variant={'subtitle1'}
                                        className={styles.lessons}><span>{lesson.mark}</span>{lesson.value}</Typography>
                            // </Zoom>
                        )
                        }
                        </div>
                    </div>
                </div>
                // </Zoom>
            )
            }
        </div>
    )
}