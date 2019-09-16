import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter ,Route , Link  } from 'react-router-dom';
import Home from './Home'
import About from './about'
import Contact from './contact'
import "bootstrap/dist/css/bootstrap.min.css"
import Naav from './Nav'



function App() {
  return (
    
    
<div>
<BrowserRouter>  
 <Naav/>
  <Route path="/Home"  component={Home}/>
  <Route path="/Contact" component={Contact}/>
  <Route path="/About" component={About}/>

  </BrowserRouter>
</div>
    

      

  );
}
export default App;
