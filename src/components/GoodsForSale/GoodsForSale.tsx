import React from 'react';
import styles from './GoodsForSale.module.scss'
import Typography from '@mui/material/Typography';
import {SelectAutoWidth} from '../MatetialUI/SelectAutoWidth/SelectAutoWidth';
import {useSelector} from 'react-redux';
import {StoreType} from '../../data/store/store';

export const GoodsForSale = () => {

    const categories = useSelector<StoreType, string[]>(state => state.goods.chosenCategory
        .filter(category => category.active).map(category => category.category))

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Typography variant={'h2'} className={styles.title}>СРЕДСТВА ДЛЯ УХОДА</Typography>
                <div className={styles.filter}>
                    <SelectAutoWidth/>
                </div>
                <div className={styles.items}>
                    {categories.map(category => category)}
                </div>
            </div>
        </div>
    )
}