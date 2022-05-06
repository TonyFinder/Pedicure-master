import styles from './Item.module.scss'
import trialImage from '../../../images/goods/png8/370.png'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button';

export const Item = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Крем для рук. Защитный для рук. Защитны
            </div>
            <div className={styles.imageContainer}>
                <div className={styles.image}>
                    <img src={trialImage} alt={'goodsImage'}/>
                </div>
                <div className={styles.descriptionContainer}>
                    <div className={styles.description}>
                        <div className={styles.volume}>100 мл</div>
                        <div className={styles.price}>
                            <div>Цена</div>
                            <div>950 рублей</div>
                        </div>
                    </div>
                    <div className={styles.actionDescription}>
                        <div>Способствует заживлению трещин</div>
                        <div>Видимые улучшения с первой недели</div>
                        <div>Увлажняет кожу, предотвращает образование гиперкератоза (натоптышей)</div>
                        <div>Дает облегчение при болезненных трещинах с первой недели</div>
                        <div>Дает облегчение при болезненных трещинах с первой недели</div>
                    </div>
                </div>
            </div>
            <div className={styles.buttonsContainer}>
                <ButtonGroup variant="text" aria-label="text button group" className={styles.buttonGroup}>
                    <Button key="action" className={styles.button}>Действие</Button>
                    <Button key="ingredients" className={styles.button}>Ингредиенты</Button>
                    <Button key="apply" className={styles.button}>Применение</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}