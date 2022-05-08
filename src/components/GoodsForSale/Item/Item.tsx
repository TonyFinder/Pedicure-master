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
                        <div className={styles.descriptionChart}>
                            <div className={styles.headerChart}>
                                <div>Объём</div>
                                <div>Цена</div>
                            </div>
                            <div className={styles.valueChart}>
                                <div>100 мл</div>
                                <div>1950 руб</div>
                            </div>
                        </div>
                        <div className={styles.actionDescription}>
                            <div>Масло Ши и масло жожоба: обладают смягчающим и питательным эффектом, обеспечивающим комфорт и защиту Вашей кожи</div>
                            <div>Витамин Е и Algisium® C – комплекс, препятствующий воспалениям и подавляющий свободные радикалы, комбинация органического силикона и витамина Е снимает ощущения натянутости и дискомфорта, защищая кожу</div>
                            <div>Экстракты моркови и персика: богатые питательными и смягчающими компонентами экстракты стимулируют обновление эпидермиса</div>
                        </div>
                    </div>
                </div>
                <div className={styles.buttonsContainer}>
                    <ButtonGroup variant="outlined" aria-label="text button group" className={styles.buttonGroup}>
                        <Button key="action" className={styles.button}>Действие</Button>
                        <Button key="ingredients" className={styles.button}>Ингредиенты</Button>
                        <Button key="apply" className={styles.button}>Применение</Button>
                    </ButtonGroup>
                </div>
            </div>
    )
}