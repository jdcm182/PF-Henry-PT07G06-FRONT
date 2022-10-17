import React, { /* useState, */ useEffect } from 'react';
import styles from './Home.module.css';
import Navbar from '../NavBar/Navbar.jsx';
import Hero from '../Hero/Hero.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import CardsGrid from '../CardsGrid/CardsGrid';
import Footer from '../Footer/Footer.jsx';
//import logoColor from '../media/juira_color.png';
import { /* connect, */ useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/actions/products.actions.jsx';


export default function Home(/* { prods, getAll } */) {

    const productsState = useSelector((state) => state.productsReducer);
    const productsToDisplay = productsState.productsToDisplay;

    const dispatch = useDispatch();
    //!productsToDisplay && dispatch(getAllProducts())

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])




    return (
        <section className={styles.homeContainer}>
            <div className={styles.heroWrapper}>
                <Hero />
            </div>
            <div className={styles.mainContainer}>
                {/*  ..MAIN.. */}
                <div className={styles.sideWrapper}>
                    <Sidebar />
                </div>
                <div className={styles.cardsGridContainer}>

                    <CardsGrid products={productsToDisplay} />
                </div>
            </div>
        </section>
    )
}
