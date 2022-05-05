import React from 'react';
import styles from './GoodsForSale.module.scss'
import Typography from '@mui/material/Typography';
import {SelectAutoWidth} from '../MatetialUI/SelectAutoWidth/SelectAutoWidth';

export const GoodsForSale = () => {

    /*const first = [
        {id: 1, image: '11'},
        {id: 2, image: '12'},
        {id: 3, image: '13'},
    ]
    const second = [
        {id: 6, image: '22'},
        {id: 7, image: '23'},
        {id: 8, image: '24'},
    ]

    let trials = [first, second]*/
    {/*<div className={styles.trial}>
                {trials.concat().map(m => <div>{m.map(m => <div>{m.image}</div>)}</div>)}
            </div>*/
    }


    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Typography variant={'h2'}
                            className={styles.title}>СРЕДСТВА ДЛЯ УХОДА В НАЛИЧИИ</Typography>
                <div className={styles.filter}>
                    <SelectAutoWidth/>
                </div>
            </div>
        </div>
    )
}