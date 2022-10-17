import React from "react";
import styles from "./CardsGrid.module.css";
import Card from "../Card/Card.jsx";

export default function CardsGrid({ products }) {
  return (
    <div className={styles.container /* cards_grid_container */}>
      <div className={styles.product_grid}>
        {products &&
          products.map((p) => (
            <Card
              key={"crd" + p.id}
              className={styles.cardItem}
              id={p.id}
              price={p.price}
              name={p.name}
              image={p.image}
            />
          ))}
      </div>
    </div>
  );
}
