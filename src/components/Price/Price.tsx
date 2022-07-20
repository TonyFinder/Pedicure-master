import React from 'react';
import styles from './Price.module.scss'
import Typography from '@mui/material/Typography';
import {pricePedicureState} from '../../data/store/pricePedicureState';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const Zoom = require("react-reveal/Zoom")

export const Price = () => {
    // console.log("Price")

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Zoom>
                    <Typography variant={'h2'}
                                className={styles.title}>{pricePedicureState.header.toUpperCase()}</Typography>
                    <div className={styles.valueContainer}>
                        {pricePedicureState.priceList.map((procedure, index) => (
                            <div key={index} className={styles.block}>
                                <Divider className={styles.divider}>
                                    <Chip label={procedure.price} className={styles.chip}/>
                                </Divider>
                                <Typography variant={'subtitle1'}
                                            className={styles.description}>{procedure.item}</Typography>
                            </div>
                        ))}
                    </div>
                </Zoom>
                <Zoom right>
                    <Typography className={styles.restInfo}><sup>*</sup>{pricePedicureState.restInfo[0]}</Typography>
                    <Typography className={styles.restInfo}><sup>**</sup>{pricePedicureState.restInfo[1]}</Typography>
                </Zoom>
            </div>
        </div>
    )
}