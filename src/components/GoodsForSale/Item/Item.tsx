import styles from './Item.module.scss'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button';
import {ItemType} from '../../../data/reducers/goodsReducer';
import {useState} from 'react';

// const Zoom = require("react-reveal/Zoom")

type ItemPropsType = {
    itemData: ItemType
}


export const Item = ({itemData}: ItemPropsType) => {
    // console.log("Item")

    let text = itemData.description
    const [description, setDescription] = useState<string[]>(text.action)
    const buttonActiveColor = {backgroundColor: "#39446f", color: "white"}
    const onClickHandler = (value: string[]) => setDescription(value)

    return (
        // <Zoom cascade>
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
                    <div className={styles.buttonsContainer}>
                        <ButtonGroup variant="text" aria-label="text button group" className={styles.buttonGroup}>
                            <Button key="action" style={description === text.action ? buttonActiveColor : {}} className={styles.button} onClick={() => onClickHandler(text.action)}>Действие</Button>
                            <Button key="ingredients" style={description === text.ingredients ? buttonActiveColor : {}} className={styles.button}  onClick={() => onClickHandler(text.ingredients)}>Ингредиенты</Button>
                            <Button key="apply" style={description === text.applying ? buttonActiveColor : {}} className={styles.button} onClick={() => onClickHandler(text.applying)}>Применение</Button>
                        </ButtonGroup>
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
            </div>
        // </Zoom>
    )
}