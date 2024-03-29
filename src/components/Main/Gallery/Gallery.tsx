import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styles from './Gallery.module.scss'
import Typography from '@mui/material/Typography';
import SwipeTwoToneIcon from '@mui/icons-material/SwipeTwoTone';
import {introductionValues} from '../../../data/store/mainPageState';

// const Zoom = require("react-reveal/Zoom")

export const Gallery = () => {
    // console.log("Gallery")

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                {/*<Zoom cascade>*/}
                    <Typography variant={'h2'}
                                className={styles.title}>{introductionValues.gallery.header.toUpperCase()}</Typography>
                {/*</Zoom>*/}
                {/*<Zoom cascade>*/}
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
                {/*</Zoom>*/}
            </div>
        </div>
)}
