import React from 'react';
import styles from './Hero.module.css';
import logo from '../media/juira_color.png';

export default function Hero() {
    return (
        <section className={styles.heroContainer}>
            {/* <div className={styles.divContainer}>
                <div className={styles.centerBox}>
                    hero
                </div>
            </div> */}
            <div className={styles.box}>
                <img className={styles.img} src={logo} alt='Juira logo' />
            </div>
            { /* <div className={styles.imgWrapper}> */}
            <div className={styles.imgPattern}>
            </div>
            {/* </div> */}

        </section>
    )
}
