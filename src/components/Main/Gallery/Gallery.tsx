import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styles from './Gallery.module.scss'
import {introductionValues} from '../../../data/images';
import Typography from '@mui/material/Typography';
import SwipeTwoToneIcon from '@mui/icons-material/SwipeTwoTone';

export const Gallery = () => {

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Typography variant={'h2'}
                            className={styles.title}>{introductionValues.gallery.header.toUpperCase()}</Typography>
                <ImageList className={styles.imageList}>
                    {introductionValues.gallery.images.map((item) => (
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
                        className={styles.directionForPictures}>{introductionValues.gallery.restInfo}</Typography>
                </div>
            </div>
        </div>
)}
