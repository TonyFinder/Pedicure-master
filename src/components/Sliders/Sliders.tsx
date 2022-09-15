import Typography from '@mui/material/Typography';
import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import SwipeTwoToneIcon from '@mui/icons-material/SwipeTwoTone';
import styles from './Sliders.module.scss'
import {slidersValues} from '../../data/store/slidersState';
import {Button} from '../common/Button/Button';

export const Sliders = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Typography variant={'h2'}
                            className={styles.title}>{slidersValues.header.toUpperCase()}</Typography>
                <Typography variant={'h4'}
                            className={styles.title}>{slidersValues.gallery.header}</Typography>
                <a href={'https://forms.gle/PMY7pAwHaN5RpETa8'} target='_blank' rel="noreferrer">
                    <Button className={styles.button}>
                        Заказать
                    </Button>
                </a>
                <ImageList className={styles.imageList}>
                    {slidersValues.gallery.images.map((item) => (
                        <ImageListItem key={item.id} className={styles.image}>
                            <img
                                src={item.image}
                                alt={item.id.toString()}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <div className={styles.comment}>
                    <SwipeTwoToneIcon color={'primary'} fontSize={'large'}/>
                    <Typography
                        className={styles.directionForPictures}>{slidersValues.gallery.restInfo}</Typography>
                </div>
            </div>
        </div>
    )
}