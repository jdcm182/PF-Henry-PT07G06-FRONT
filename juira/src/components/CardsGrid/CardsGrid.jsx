import React from 'react';
import styles from './CardsGrid.module.css';
import Card from '../Card/Card.jsx'
import Pagination from '../Pagination/Pagination'

export default function CardsGrid({ products }) {

    const [page, setPage] = React.useState(1)
    const [perPage, setPerPage] = React.useState(9)
    const maxPage = Math.ceil(products.length / perPage)

    return (
        <div className={styles.container/* cards_grid_container */}>
            <div className={styles.product_grid}>


                {products && products
                .slice(
                    (page - 1) * perPage,
                    ((page - 1) * perPage) + perPage
                ).map(p => (
                    <Card key={'crd' + p.id} className={styles.cardItem}
                        id={p.id} price={p.price} name={p.name} image={p.image} />
                ))}

            </div>
            <Pagination
                page={page}
                setPage={setPage}
                maxPage={maxPage}
                products={products}
            >
            </Pagination>
        </div >
    )
}
