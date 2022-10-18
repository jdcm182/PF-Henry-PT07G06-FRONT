
import React, { /* useState, */ useEffect, useState } from "react";
import styles from "./Home.module.css";
import Hero from "../Hero/Hero.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import CardsGrid from "../CardsGrid/CardsGrid";
import Footer from '../Footer/Footer.jsx';
//import logoColor from '../media/juira_color.png';
import { /* connect, */ useDispatch, useSelector } from "react-redux";
import { getAllProducts, getCategories } from "../../redux/actions/products.actions.jsx";
import FilterBar from "../FilterBar/FilterBar";
const _ = require("lodash");

export default function Home(/* { prods, getAll } */) {
  const productsState = useSelector((state) => state.productsReducer);
  const productsToDisplay = productsState.productsToDisplay;
  const filterSort = useSelector((state) => state.app.filterState);

  const dispatch = useDispatch();
  const [stateFilterAndSort, setStateFilterAndSort] = useState([]);
  //!productsToDisplay && dispatch(getAllProducts())

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);



  useEffect(() => {
    filterAndSort();
  }, [filterSort, productsToDisplay]);


  const filterAndSort = () => {
    let aux = [];
    if (productsToDisplay?.length > 0) {
      if (filterSort.categories !== "Todos") {
        aux = productsToDisplay?.filter((ele) => {
          return ele.categories[0].name === filterSort.categories;
        });
      } else {
        aux = productsToDisplay;
      }
      setStateFilterAndSort(
        _.orderBy(
          aux,
          filterSort.sort === "A-Z" || filterSort.sort === "Z-A"
            ? "name"
            : "price",
          filterSort.sort === "Z-A" || filterSort.sort === "Mayor Valor"
            ? "desc"
            : "asc"
        )
      );
    }
  };

  return (
    <section className={styles.homeContainer}>
      <div className={styles.heroWrapper}>
        <Hero />
      </div>
      <div className={styles.filterBarWrapper}>
        {/* <Navbar /> */}
        <FilterBar />
      </div>
      <div className={styles.mainContainer}>
        {/*  ..MAIN.. */}
        {/* <div className={styles.sideWrapper}>
          <Sidebar />
        </div> */}
        <div className={styles.cardsGridContainer}>
          <CardsGrid products={stateFilterAndSort} />
        </div>
      </div>
      {<div className={styles.footerWrapper}>
                <Footer />
            </div>}
    </section>
  );

}
