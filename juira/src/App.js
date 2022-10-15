//import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom';
import Landing from './components/Landing.jsx';


function App() {
  return (
    <div className="App">
      <Route exact path={'/'} component={Landing} />
      <Route path={'/juira'} component={Landing} />
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
