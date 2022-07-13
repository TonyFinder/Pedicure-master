import React from 'react';
import styles from './ScrollDown.module.scss';
import KeyboardDoubleArrowDownTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowDownTwoTone';

export const ScrollDown = () => {
    const scroll = () => {
        const step = (window.innerHeight - window.scrollY) / 100
        let times = 0

        const innerTimer = setInterval(() => {
            if (window.scrollY >= window.innerHeight || step >= window.innerHeight - window.scrollY) clearInterval(innerTimer)
            times = times + 1
            const lastState = window.scrollY
            window.scroll(0, lastState + step * times)
            if (window.scrollY >= window.innerHeight || step >= window.innerHeight - window.scrollY) clearInterval(innerTimer)
        }, 50)
    }

    return (
        <div className={styles.container}>
            <KeyboardDoubleArrowDownTwoToneIcon className={styles.icon}
                                                style={{fontSize: '60px'}}
                                                color={'primary'}
                                                onClick={scroll}/>
        </div>
    )
}