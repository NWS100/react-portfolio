import React, { Component } from 'react';
import moment from "moment"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import PortfolioContainer from './portfolio/portfolio-container'
import NavigationContainer from './navigation/navigation-container'
import Home from './pages/home'
import About from './pages/about'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationContainer />

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-me" component={About} />
          </Switch>
        </Router>

        <h1>Nathan Whitaker's Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a') }</div>
        <PortfolioContainer />
      </div>
    );
  }
}