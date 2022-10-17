import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';


export default function Card(props) {
    return (
        <section className={styles.cardContainer}>
            <div className={[styles.card, styles.stacked].join(' ')}>
                {/* <a href="/" className={styles.cardLink}> */}
                <Link to={`/juira/${props.id}`/* detail/${props.id} `*/}
                    className={styles.cardLink}>
                    <img src={props.image}
                        className={styles.card__img}
                        alt="Card" />
                    <div className={styles.card__content}>
                        <h2 className={styles.card__title}>CARD!</h2>
                        <p className={styles.card__price}>{"$ " + props.price}</p>
                        <p className={styles.card__description}></p>
                    </div>
                </Link>
                {/* </a> */}
            </div>
        </section>
    )
}