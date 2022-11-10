import React from 'react'
import styles from './Buy.module.scss'
import {introductionValues} from '../../../data/store/mainPageState';
import {Offer} from './Offer/Offer';

export const Buy = () => {

    return (
        <div className={styles.container}>

            {introductionValues.buy.map(offer => (
                <Offer key={offer.id}
                       header={offer.header}
                       price={offer.price}
                       sale={offer.sale}
                       bullets={offer.bullet}
                       link={offer.link}
                       additions={offer.additions}/>
            ))}

        </div>
    )
}