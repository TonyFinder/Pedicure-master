import styles from './Item.module.scss'
import trialImage from '../../../images/goods/png8/370.png'

export const Item = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Крем для рук. Защитный для рук. Защитны
            </div>
            <div className={styles.imageContainer}>
                <div className={styles.image}>
                    <img src={trialImage}/>
                </div>
                <div className={styles.description}>
                    <div className={styles.volume}>100 мл</div>
                    <div className={styles.price}>
                        <div>Цена</div>
                        <div>950 рублей</div>
                    </div>
                </div>
            </div>
        </div>
    )
}