import React from 'react'
import '../styles/App.css';
import { Link, BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
const App = () => {

  return (
    <div id="main">
      <BrowserRouter>
        <Switch>
          <Route>
            <div id='navbar'>
              <div id='home-link'> Home</div>
              <div id='aboutus-link'>About Us</div>
            </div>
          </Route>
          <Route>
            <Home />
          </Route>
          <Route >
            <AboutUs />
          </Route>
        </Switch>
      </BrowserRouter>
    </div >
  )
}


export default App;
