import React from 'react';
import styles from './CardsGrid.module.css';
import Card from '../Card/Card.jsx'


export default function CardsGrid() {
    return (
        <div className={styles.container/* cards_grid_container */}>
            <div className={styles.product_grid}>
                {/* <div className={styles.card}> */}
                {/* </div> */}
                <Card className={styles.cardItem} price="100" image="http://www.vicionet.com/Vel/418-large_default/apple-iphone-11-128gb-.jpg" />
                <Card className={styles.cardItem} price="178" image="https://http2.mlstatic.com/D_NQ_NP_953048-MLA43731925895_102020-O.jpg" />
                <Card className={styles.cardItem} price="100" image="https://http2.mlstatic.com/D_NQ_NP_818059-MLA32029904978_082019-O.jpg" />
                <Card className={styles.cardItem} price="1000" image="https://http2.mlstatic.com/D_NQ_NP_864346-MLA43543797039_092020-O.webp" />
                <Card className={styles.cardItem} price="100" image="https://http2.mlstatic.com/D_NQ_NP_797566-MLA43565663415_092020-O.jpg" />
                <Card className={styles.cardItem} price="800" image="https://http2.mlstatic.com/D_NQ_NP_761351-MLA29017027737_122018-W.jpg" />
                <Card className={styles.cardItem} price="100" image="https://http2.mlstatic.com/D_NQ_NP_2X_762944-MLA46413438751_062021-F.webp" />
                <Card className={styles.cardItem} price="125" image="https://http2.mlstatic.com/D_NQ_NP_2X_707165-MLA50891325356_072022-F.webp" />
                <Card className={styles.cardItem} price="100" image="https://http2.mlstatic.com/D_NQ_NP_2X_776347-MLA45533838404_042021-F.webp" />

            </div>
        </div>
    )
}