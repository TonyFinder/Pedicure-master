import React from 'react';
import styles from './UnderDevelopment.module.scss'
import Typography from '@mui/material/Typography';

const Zoom = require("react-reveal/Zoom")

export const UnderDevelopment = () => {
    // console.log("UnderDevelopment")

    return (
        <div className={styles.container}>
            <Zoom cascade>
                <div className={styles.innerContainer}>
                    <Typography variant={'h2'}
                                className={styles.title}>СТРАНИЦА В РАЗРАБОТКЕ</Typography>
                    <div className={styles.valueContainer}>
                        <Typography variant={'subtitle1'} className={styles.description}>
                            По всем вопросам можете обращаться в
                            <a href={'https://wa.me/79510215025'} target={'_blank'} rel="noreferrer">
                                <b> Whats App</b>
                            </a> для оперативной связи!
                        </Typography>
                    </div>
                </div>
            </Zoom>
        </div>
    )
}