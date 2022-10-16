import React from 'react';
import styles from './Footer.module.css';


export default function Footer() {
    return (
        <section className={styles.footerContainer}>
            <div className={styles.footerTop}>FOOTER!</div>
            <div className={styles.footerBottom}>bottom</div>
        </section>
    )
}