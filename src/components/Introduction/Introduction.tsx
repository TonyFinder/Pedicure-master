import styles from './Introduction.module.scss';
import {images} from '../../data/images';
import React from 'react';

export const Introduction = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={images.anna} alt={'author'}/>
            </div>
            <div className={styles.introduction}>
                <h2>Привет, это Аня, давайте знакомиться!</h2>
                <p>Уже четвёртый год я занимаюсь своим любимым занятием и не могу остановиться, совешенствуя себя как мастер.</p>
                <p>Также я провожу индивидуальные курсы по педикюру!</p>
                <p>На данной страничке вы можете ознакомиться с моими работами, найти информацию про обучение педикюру и ознакомиться со средствами по уходу за ножками.</p>
            </div>
        </div>
    )
}