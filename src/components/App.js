import React from 'react'
import '../styles/App.css'
import { Link, BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
const App = () => {
  const Navbar = () => {
    return (
      <div id="navbar">
        <Link to="/home" id="home-link">
          Home
        </Link>
        <Link to="/about-us" id="aboutus-link">
          About Us
        </Link>
      </div>
    )
  }
  return (
    <div id="main">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
