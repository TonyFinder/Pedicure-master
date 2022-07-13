import React, {useEffect, useState} from 'react';
import styles from './ModalUp.module.scss'
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';

type ModalUpType = {
    speed: number // 1 - fast; 100 - slow
}

export const ModalUp = ({speed}: ModalUpType) => {
    const [show, setShow] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 300) setShow(true)
        else setShow(false)
    }

    const scroll = () => {
        const step = window.scrollY / speed
        let lastState = window.scrollY

        const innerTimer = setInterval(() => {
            if (lastState < window.scrollY) clearInterval(innerTimer)
            lastState = window.scrollY

            window.scroll(0, lastState - step);
            if (window.scrollY === 0) clearInterval(innerTimer)
        }, 50)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {show &&
                <div onClick={scroll} className={styles.container}>
                    <ArrowCircleUpTwoToneIcon className={styles.icon}/>
                </div>
            }
        </>
    )
}