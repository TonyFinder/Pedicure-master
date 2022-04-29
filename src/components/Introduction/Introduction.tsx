import styles from './Introduction.module.scss';
import {images, introductionValues, IntroductionValueType} from '../../data/images';
import React from 'react';
import Typography from '@mui/material/Typography';

export const Introduction = () => {
    let screen = window.innerWidth;
    let oneWayImages = (value: IntroductionValueType) => <div className={styles.valueContainer} key={value.id}>
        <div className={styles.images}>
            <img src={value.image} alt={'nails'}/>
        </div>
        <div className={styles.value} style={screen > 450 ? {marginLeft: 10} : {marginLeft: 0}}>
            <Typography variant={'subtitle1'}>{value.value}</Typography>
        </div>
    </div>
    let twoWayImages = (value: IntroductionValueType) => <div className={styles.valueContainer} key={value.id}>
        <div className={styles.value} style={screen > 450 ? {marginRight: 10} : {marginRight: 0}}>
            <Typography variant={'subtitle1'}>{value.value}</Typography>
        </div>
        <div className={styles.images}>
            <img src={value.image} alt={'nails'}/>
        </div>
    </div>

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={images.anna} alt={'author'}/>
            </div>
            <div className={styles.introduction}>
                <Typography variant={'h4'} className={styles.header}>Привет, это Аня, давайте знакомиться!</Typography>
                {screen > 450
                    ? introductionValues.map(value => (
                        value.id % 2 !== 0
                            ? oneWayImages(value)
                            : twoWayImages(value)
                    ))
                    : introductionValues.map(value => (
                            oneWayImages(value)
                    )
                    )}
            </div>
        </div>
    )
}

// types