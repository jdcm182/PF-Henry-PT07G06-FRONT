//import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Switch, Route,  } from 'react-router-dom';
import Landing from './components/Landing/Landing.jsx';
import Home from './components/Home/Home.jsx';
import Detail from './components/DetailProduct/Detail';
import SellForm from './components/SellorEditProduct/SellForm';


function App() {
  return (
    <div className="App">
    <BrowserRouter >
    <Switch>
      <Route exact path={'/'} component={Landing} />
      <Route path={'/juira'} component={Home} />
      <Route path={'/juira/sell'} component={SellForm} />
      <Route path={'/juira/:id'} component={Detail} />
    </Switch>
      
        
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
