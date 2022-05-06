import React from 'react';
import styles from './GoodsForSale.module.scss'
import Typography from '@mui/material/Typography';
import {SelectAutoWidth} from '../MatetialUI/SelectAutoWidth/SelectAutoWidth';
import {Item} from './Item/Item';

export const GoodsForSale = () => {

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Typography variant={'h2'} className={styles.title}>СРЕДСТВА ДЛЯ УХОДА</Typography>
                <div className={styles.filter}>
                    <SelectAutoWidth/>
                </div>
                <div className={styles.items}>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </div>
            </div>
        </div>
    )
}