import React from 'react'
import Typography from '@mui/material/Typography';
import styles from './IntroOnline.module.scss'

const Zoom = require("react-reveal/Zoom")

export const IntroOnline = () => {
    // console.log("IntroOnline")

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Zoom cascade>
                    <Typography variant={'h2'}
                                className={styles.title}>МАГИЯ ПЕДИКЮРА</Typography>
                </Zoom>
            </div>
        </div>
    )
}