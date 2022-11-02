//import logo from './logo.svg';
import "./App.css";


import {BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import Landing from './components/Landing/Landing.jsx';
import Home from './components/Home/Home.jsx';
import Detail from './components/DetailProduct/Detail';
import SellForm from './components/SellorEditProduct/SellForm';
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar/Navbar'
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import DashboardAdmin from './components/DashboardAdmin/DashboardAdmin';
import Dashboard from "./components/DashboardUser/Dashboard";
import UserDashboard from './components/Dashboard/UserDash';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import ScrollToTop from './components/ScrollToTop'
import Favorites from './components/Favorites/Favorites';
import OrdenDeCompra from './components/OrdenDeCompra/OrdenDeCompra';
import { refreshData } from "./redux/actions/app.actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GuestNavigator from "./Navigator/GuestNavigator";
import UserNavigator from "./Navigator/UserNavigator";
import AdminNavigator from "./Navigator/AdminNavigator";



import { createTheme, ThemeProvider } from '@mui/material/styles';//'@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#23c197'
    }
  }
})


function App() {
  const { pathname } = useLocation();
  const reloadSesion = useDispatch(refreshData);

  useEffect(() => {
    reloadSesion(refreshData());
  }, [reloadSesion]);

  const role = useSelector((state) => state.app.token.role);
  
  return (
    <div className="App">

 <ThemeProvider theme={theme}>
      <BrowserRouter>

       <ScrollToTop />
      {console.log("role1", role, !role)}

        {!role && <GuestNavigator />}
        {role === "usuario" && <UserNavigator />}
        {role === "admin" && <AdminNavigator />}
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
