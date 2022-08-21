import React from 'react'
import Typography from '@mui/material/Typography';
import {introductionValues} from '../../../data/store/mainPageState';
import styles from './YouWillKnow.module.scss'
import {YouTubeFrame} from '../YouTube/YouTube';

// const Zoom = require("react-reveal/Zoom")
// const LightSpeed = require("react-reveal/LightSpeed")

export const YouWillKnow = () => {
    // console.log("YouWillKnow")

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                {introductionValues.youWillKnow.map((block, i) => (
                    <div key={i}>
                        {/*<Zoom cascade>*/}
                            <Typography variant={'h2'}
                                        className={styles.title}>{block.description.toUpperCase()}</Typography>
                        {/*</Zoom>*/}
                        <div className={styles.bulletBlock}>
                            {block.info.map(value => <Typography key={value.id} variant={'h3'}
                                            className={styles.bullet}>{value.value}</Typography>)}
                        </div>

                    </div>
                    ))
                }
                {/*<LightSpeed left>*/}
                    <YouTubeFrame/>
                {/*</LightSpeed >*/}
            </div>
        </div>
    )
}