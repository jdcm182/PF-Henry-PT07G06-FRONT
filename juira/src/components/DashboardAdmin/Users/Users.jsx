import React, { useEffect } from 'react';
import styles from './Users.module.css';
import EnhancedTable from './EnhancedUsersTable';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import { useSelector, useDispatch } from 'react-redux';
import { createTheme } from '@mui/material/styles';
import DashCard from './DashCard'
const users = require('./users.json')

let totalUsers = users.length
let activeUsers = 0
let inactiveUsers = 0

users.forEach( user => user.state === 'activo' ? activeUsers += 1 : inactiveUsers += 1)


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

export default function Users() {
    const classes = useStyles();
    // let products = useSelector((state) => state.productsReducer.allProducts);
    
    return (
        <div className={styles.dashWrapper}>
          
            <Container className={classes.root} 
            sx={{ width: "85%", height: "100%", /* backgroundColor:"#444", */
                boxShadow: '0 8px 15px 5px #cccccc55', padding: '2rem', borderRadius: '.8rem' }} >

                <Container sx={{display:"Flex", flexDirection:"row", justifyContent:"space-evenly", flexWrap: "wrap"}}>

                  <DashCard title="Total usuarios" value={totalUsers} info1={totalUsers} info2={`de ${totalUsers}`} />
                  
                  <DashCard title="Usuarios activos" value={activeUsers} info1={activeUsers} info2={`de ${totalUsers}`} />

                  <DashCard title="Usuarios inactivos" value={inactiveUsers} info1={inactiveUsers} info2={`de ${totalUsers}`} />

                </Container>

                <EnhancedTable items={users} className={classes.palette} />
                
            </Container>
          
        </div>
      );
  }

