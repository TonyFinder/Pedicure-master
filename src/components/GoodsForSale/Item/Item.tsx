import styles from './Item.module.scss'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button';
import {ItemType} from '../../../data/reducers/goodsReducer';
import {useState} from 'react';

type ItemPropsType = {
    id: number
    itemData: ItemType
}


export const Item = ({id, itemData}: ItemPropsType) => {
    let text = itemData.description
    const [description, setDescription] = useState<string[]>(text.action)
    const buttonActiveColor = {backgroundColor: "#39446f", color: "white"}


    return (
            <div className={styles.container}>
                <div className={styles.title}>
                    {itemData.title}
                </div>
                <div className={styles.underTitleBlock}>
                    <div className={styles.descriptionChart}>
                        <div className={styles.headerChart}>
                            <div>Объём</div>
                            <div>Цена</div>
                        </div>
                        <div className={styles.valueCharts}>
                            {itemData.variety.map(data => <div key={data.id} className={styles.valueChart}>
                                <div>{data.volume}</div>
                                <div>{data.price}</div>
                            </div>)}
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <div className={styles.image}>
                            <img src={itemData.pictureUrl} alt={'goodsImage'}/>
                        </div>
                        <div className={styles.descriptionContainer}>
                            <div className={styles.actionDescription}>
                                {description.map((list, index) => <div key={index}>{list}</div>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.buttonsContainer}>
                        <ButtonGroup variant="text" aria-label="text button group" className={styles.buttonGroup}>
                            <Button key="action" style={buttonActiveColor} className={styles.button}>Действие</Button>
                            <Button key="ingredients" className={styles.button}>Ингредиенты</Button>
                            <Button key="apply" className={styles.button}>Применение</Button>
                        </ButtonGroup>
                    </div>
            </div>
    )
}