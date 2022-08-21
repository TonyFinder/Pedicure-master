import React from 'react'
import Typography from '@mui/material/Typography';
import styles from './IntroOnline.module.scss'
import {introductionValues} from '../../../data/store/mainPageState';
import {ScrollDown} from '../../common/ScrollDown/ScrollDown';

// const Zoom = require("react-reveal/Zoom")

export const IntroOnline = () => {
    // console.log("IntroOnline")

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                {/*<Zoom cascade>*/}
                    <Typography variant={'h1'}
                                className={styles.title}>{introductionValues.header.toUpperCase()}</Typography>
                    <Typography variant={'h3'}
                                className={styles.onlineHeader}>{introductionValues.online}</Typography>
                {/*</Zoom>*/}
                {/*<Zoom cascade>*/}
                    {introductionValues.bullets.map(bullet => <div key={bullet.id} className={styles.bulletBlock}>
                        <Typography variant={'h2'}
                                    className={styles.bullet}>{bullet.bullet}</Typography>
                        <Typography variant={'h3'}
                                    className={styles.bulletInfo}>{bullet.info}</Typography>
                    </div>)}

                    <ScrollDown/>

                {/*</Zoom>*/}
            </div>

        </div>
    )
}