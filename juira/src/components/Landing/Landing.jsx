import React from 'react';
import styles from './Landing.module.css';
import logo from '../media/juira_white.png';
import { Link } from 'react-router-dom';


export default function Landing() {
    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <div className={styles.imgContainer}>
                    <img src={logo} alt="Juira logo"
                        className={styles.logo}></img>
                </div>
                <br />
                <Link to="/juira" className={styles.btnEntrar}>Ingresar</Link>
            </div>
            <div className={styles.imgWrapper}>
                <div className={styles.imgPattern}>
                </div>
            </div>
        </section>
    )
}