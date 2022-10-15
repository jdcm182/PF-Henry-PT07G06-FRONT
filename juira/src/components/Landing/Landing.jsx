import React from 'react';
import styles from './Landing.module.css';
import logo from '../media/juira_white.png';


export default function Landing() {
    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <div className={styles.imgContainer}>
                    <img src={logo} alt="Juira logo"
                        className={styles.logo}></img>
                </div>
                <br />
                <a href="/juira" className={styles.btnEntrar}>Ingresar</a>
            </div>
            <div className={styles.imgWrapper}>
                <div className={styles.imgPattern}>
                </div>
            </div>
        </section>
    )
}