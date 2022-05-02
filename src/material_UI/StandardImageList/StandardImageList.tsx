import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styles from './StandardImageList.module.scss'
import {introductionValues} from '../../data/images';
import Typography from '@mui/material/Typography';

export const StandardImageList = () => {

    return (
        <div className={styles.container}>
            <Typography variant={'h2'}
                        className={styles.header}>{introductionValues.gallery.header.toUpperCase()}</Typography>
            <ImageList className={styles.imageList} variant={'masonry'}>
                {introductionValues.gallery.images.map((item) => (
                    <ImageListItem key={item.id} className={styles.image}>
                        <img
                            src={item.image}
                            alt={item.id.toString()}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
)}

// cols={5} rowHeight={150}