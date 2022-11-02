//import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import Landing from './components/Landing/Landing.jsx';
import Home from './components/Home/Home.jsx';
import Detail from './components/DetailProduct/Detail';
import SellForm from './components/SellorEditProduct/SellForm';
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar/Navbar'
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Dashboard from './components/Dashboard/Dashboard';
import UserDashboard from './components/Dashboard/UserDash';
import Login from './components/Login/Login';
import Register from './components/Login/Register';

import ScrollToTop from './components/ScrollToTop'
import Favorites from './components/Favorites/Favorites';
import OrdenDeCompra from './components/OrdenDeCompra/OrdenDeCompra';

import { createTheme, ThemeProvider } from '@mui/material/styles';//'@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#23c197'
    }
  }
})


function App() {
  
  const {pathname} = useLocation()
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <BrowserRouter >
        {pathname !== '/' && <NavBar/>}
        <ScrollToTop />
      <Switch>
        <Route exact path={'/'} component={Landing} />
        <Route exact path={'/juira'} component={Home} />
        <Route exact path={'/juira/shoppingCart'} component={ShoppingCart} />
        <Route exact path={'/juira/dashboard'} component={Dashboard} />
        <Route exact path={'/juira/userDash'} component={UserDashboard} />
        <Route exact path={'/juira/favorites'} component={Favorites} />
        <Route exact path={'/juira/order'} component={OrdenDeCompra} />
        <Route exact path={'/juira/login'} component={Login} />
        <Route exact path={'/juira/register'} component={Register} />
        <Route path={'/juira/sell'} component={SellForm} />
        <Route path={'/juira/:id'} component={Detail} />
      </Switch>
        {pathname !== '/' && <Footer/>}
      </BrowserRouter>
    </ThemeProvider>
    

    </div>
  );
}

export default App;
/*
     _                
    / \   _ __  _ __  
   / _ \ | '_ \| '_ \ 
  / ___ \| |_) | |_) |
 /_/   \_\ .__/| .__/ 
         |_|   |_|    
*/
