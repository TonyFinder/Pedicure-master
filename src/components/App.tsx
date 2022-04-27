import React from 'react';
import {Header} from '../material_UI/Header/Header';
import {images} from '../data/images';
import styles from './App.module.scss'

export const App = () => {

    return <div>
        <Header/>
        <div className={styles.image}>
            <img src={images.anna} alt={'author'}/>
        </div>
    </div>
}