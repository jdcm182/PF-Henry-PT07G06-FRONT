import React from 'react';
import styles from './Home.module.css';
import Navbar from '../NavBar/Navbar.jsx';
import Hero from '../Hero/Hero.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import CardsGrid from '../CardsGrid/CardsGrid';
import Footer from '../Footer/Footer.jsx';


//import logoColor from '../media/juira_color.png';


export default function Home() {
    return (
        <section className={styles.homeContainer}>
            <div className={styles.heroWrapper}>
                <Hero />
            </div>
            <div className={styles.navWrapper}>
                <Navbar />
            </div>
            <div className={styles.mainContainer}>
                {/*  ..MAIN.. */}
                <div className={styles.sideWrapper}>
                    <Sidebar />
                </div>
                <div className={styles.cardsGridContainer}>
                    <CardsGrid />
                </div>
            </div>
            <div className={styles.footerWrapper}>
                <Footer />
            </div>
        </section>
    )
}