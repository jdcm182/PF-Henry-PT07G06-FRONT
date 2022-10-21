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

import ScrollToTop from './components/ScrollToTop'


function App() {
  
  const {pathname} = useLocation()
  console.log(pathname)
  return (
    <div className="App">
    <BrowserRouter >
      {pathname !== '/' && <NavBar/>}
      <ScrollToTop />
    <Switch>
      <Route exact path={'/'} component={Landing} />
      <Route exact path={'/juira'} component={Home} />
      <Route exact path={'/juira/shoppingCart'} component={ShoppingCart} />
      <Route path={'/juira/sell'} component={SellForm} />
      <Route path={'/juira/:id'} component={Detail} />
    </Switch>
      {pathname !== '/' && <Footer/>}
    </BrowserRouter>
    

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
