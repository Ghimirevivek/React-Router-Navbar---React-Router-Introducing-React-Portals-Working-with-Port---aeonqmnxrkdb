import React from 'react'
import { Link, BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
const Home = () => {
    return (
        <div id='home-page'>
            Welcome to Home Page<br />
            <button>Go back</button>
        </div>
    )
}
export default Home;