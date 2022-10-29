import React, { useEffect } from 'react';
import styles from './ShoppingOrder.module.css';
import EnhancedTable from './EnhancedShoppingOrderTable';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import { useSelector, useDispatch } from 'react-redux';
import { createTheme } from '@mui/material/styles';
import DashCard from './DashCard';
const orders = require('./orders.json')

let totalAmount = 0
let ordersQty = 0
let totalAmountPending = 0
let ordersPendingQty = 0
let totalAmountCompleted = 0
let odersCompletedQty = 0

orders.forEach( order => {totalAmount += order.total; ordersQty += 1} )
orders.forEach( order => {if (order.state === 'pending') totalAmountPending += order.total} )
orders.forEach( order => {if (order.state === 'completed') totalAmountCompleted += order.total} )

const theme = createTheme();

const useStyles = makeStyles({
    root: {
    color: theme.palette.primary.main,
  }
, 
    palette: {
    type: 'light',
    primary: {
      main: '#23c197',
    },
    secondary: {
      main: '#19d6c6',
    },
    text: {
      primary: 'rgba(179,0,0,0.87)',
    },
  },

  });

export default function ShoppingOrder() {
    const classes = useStyles();
    let products = useSelector((state) => state.productsReducer.allProducts);
    
    return (
        <div className={styles.dashWrapper}>
          
            <Container className={classes.root} 
            sx={{ width: "85%", height: "100%", /* backgroundColor:"#444", */
                boxShadow: '0 8px 15px 5px #cccccc55', padding: '2rem', borderRadius: '.8rem' }} >

                <Container sx={{display:"Flex", flexDirection:"row", justifyContent:"space-evenly", flexWrap: "wrap"}}>

                  <DashCard title="Total órdenes" value={`$ ${totalAmount.toLocaleString('de-DE')}`} info1={ordersQty} info2={`de ${ordersQty}`} />
                  
                  <DashCard title="Órdenes pendientes" value={`$ ${totalAmountPending.toLocaleString('de-DE')}`} info1={ordersPendingQty} info2={`de ${ordersQty}`} />

                  <DashCard title="Órdenes completadas" value={`$ ${totalAmountCompleted.toLocaleString('de-DE')}`} info1={odersCompletedQty} info2={`de ${ordersQty}`} />

                </Container>

                {/* <ProductsTable/> */}

                <EnhancedTable items={products} className={classes.palette} />
                
            </Container>
          
        </div>
      );
  }
