import React from 'react';
import styles from './CardsGrid.module.css';
import Card from '../Card/Card.jsx'
import Pagination from '../Pagination/Pagination'
import Container from '@mui/material/Container';
import Loading from '../Loading/Loading';


export default function CardsGrid({ products }) {

    const [page, setPage] = React.useState(1)
    const [perPage, setPerPage] = React.useState(8)
    const maxPage = Math.ceil(products.length / perPage)

    return (
        (products.length===0)?<div>
            <Loading/>
             </div>:
        <div className={styles.container/* cards_grid_container */}>
            <div className={styles.product_grid}>
            
                {products && products
                .slice(
                    (page - 1) * perPage,
                    ((page - 1) * perPage) + perPage
                ).map(p => (
                    <Card key={'crd' + p.id} className={styles.cardItem} product={p}
                        id={p.id} price={p.price} name={p.name} image={p.image} />
                ))}

            </div>
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    p: 1,
                }}>
                <Pagination
                    page={page}
                    setPage={setPage}
                    maxPage={maxPage}
                    products={products}
                    >
                </Pagination>
            </Container>
        </div >
    )
}
