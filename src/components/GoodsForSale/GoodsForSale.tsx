import React from 'react';
import styles from './GoodsForSale.module.scss'
import Typography from '@mui/material/Typography';
import {SelectAutoWidth} from '../MatetialUI/SelectAutoWidth/SelectAutoWidth';
import {useSelector} from 'react-redux';
import {StoreType} from '../../data/store/store';
import {ItemType} from '../../data/reducers/goodsReducer';
import {Item} from './Item/Item';

export const GoodsForSale = () => {
    // console.log("GoodsForSale")

    const categoriesToShow = useSelector<StoreType, string[]>(state => state.goods.chosenCategory
        .filter(category => category.active).map(category => category.category))
    const drySkin = useSelector<StoreType, ItemType[]>(state => state.goods.drySkin)
    const wetSkin = useSelector<StoreType, ItemType[]>(state => state.goods.wetSkin)

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Typography variant={'h2'} className={styles.title}>СРЕДСТВА ДЛЯ УХОДА</Typography>
                <div className={styles.filter}>
                    <SelectAutoWidth/>
                </div>
                <div className={styles.items}>
                    {(categoriesToShow.length === 1 && categoriesToShow[0] === 'drySkin') && drySkin.map(item => (
                        <Item key={item.id} itemData={item}/>
                    ))}
                    {(categoriesToShow.length === 1 && categoriesToShow[0] === 'wetSkin') && wetSkin.map(item => (
                        <Item key={item.id} itemData={item}/>
                    ))}
                    {(categoriesToShow.length > 1) && drySkin.concat(wetSkin).map(item => (
                        <Item key={item.id} itemData={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}