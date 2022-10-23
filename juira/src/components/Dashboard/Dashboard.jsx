import React from 'react';
import styles from './Dashboard.module.css';
import EnhancedTable from './EnhancedTable';
import ProductsTable from './ProductsTable';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { ThemeProvider } from '@mui/styles';
import { themeOptions } from '../../ThemeColors.js'
import { makeStyles } from '@mui/styles';

import { createTheme } from '@mui/material/styles';

const theme = createTheme();


const useStyles = makeStyles({
    root: {
    color: theme.palette.primary.main,
  }
,
    /* btn: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    }, */
    
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


 export default function Dashboard() {

    const classes = useStyles();

    return (
        <div className={styles.dashWrapper}>
          
            <Container className={classes.root} 
            sx={{ width: "85%", height: "100%"/* , backgroundColor:"#444" */ }} >

                {/* <ProductsTable/> */}

                {<EnhancedTable className={classes.palette} />}
                
            </Container>
          
        </div>
    );
}

{/* <ThemeProvider theme={themeOptions}> */}
