//import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom';
import Landing from './components/Landing/Landing.jsx';
import Home from './components/Home/Home.jsx';
import Detail from './components/DetailProduct/Detail';


function App() {
  return (
    <div className="App">
      <Route exact path={'/'} component={Landing} />
      <Route path={'/juira'} component={Home} />
      <Route path={'/juira/:id'} component={Detail} />
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
