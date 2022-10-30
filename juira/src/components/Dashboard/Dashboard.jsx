import React, { useEffect } from 'react';
import styles from './Dashboard.module.css';
import EnhancedTable from './EnhancedTable';
//import ProductsTable from './ProductsTable';
import Container from '@mui/material/Container';

import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../redux/actions/products.actions.jsx';

import DashCard from './DashCard.jsx';



 export default function Dashboard() {
  
    let products = useSelector((state) => state.productsReducer.allProducts);
    // console.log('Dashboard > products: ', products)
    // console.log('Dashboard > products.length: ', products.length)

    const dispatch = useDispatch();
    products.length===0 && dispatch(getAllProducts());

    //products && rows.length===0 && products.forEach( p => rows.push(createData(p.name, p.id, p.status, p.price, p.ownerId) ) )



    try {

      // Card 1
      let productsTotalQuantity = products.length;
      let totalAmount = "$ " + products.reduce((prev, curr)=>prev+curr.price, 0).toLocaleString('de-DE');
      
      // Card 2 
      const publishedProducts = products.filter(p=>p.status==="Publicado");
      let productsPublishedQuantity = publishedProducts.length;
      let totalAmountPublished = "$ " + publishedProducts.reduce((prev, curr)=>prev+curr.price, 0).toLocaleString('de-DE');

      // Card 3
      const pausedProducts = products.filter(p=>p.status==="En pausa");
      let productsPausedQuantity = pausedProducts.length;
      let totalAmountPaused = "$ " + pausedProducts.reduce((prev, curr)=>prev+curr.price, 0).toLocaleString('de-DE');

      //let totalAmountSold = 0;
      //let productsSold = 0;
      //let productsDeleted = 0;
      
      /* useEffect( ()=>{

      },[]) */

      return (
        <div className={styles.dashWrapper}>
          
            <Container 
            sx={{ width: "85%", height: "100%", /* backgroundColor:"#444", */
                boxShadow: '0 8px 15px 5px #cccccc55', padding: '2rem', borderRadius: '.8rem' }} >

                <Container sx={{display:"Flex", flexDirection:"row", justifyContent:"space-evenly", flexWrap: "wrap"}}>

                  <DashCard title="Total Productos" value={totalAmount} info1={productsTotalQuantity} info2={`de ${productsTotalQuantity}`} />
                  
                  <DashCard title="Productos Publicados" value={totalAmountPublished} info1={productsPublishedQuantity} info2={`de ${productsTotalQuantity}`} />

                  <DashCard title="Productos en Pausa" value={totalAmountPaused} info1={productsPausedQuantity} info2={`de ${productsTotalQuantity}`} />

                </Container>

                {/* <ProductsTable/> */}

                {<EnhancedTable items={products} />}
                
            </Container>
          
        </div>
      );
  }
  catch(e) {
    return (null)
  }
}

