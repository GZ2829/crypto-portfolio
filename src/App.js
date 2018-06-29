import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Coins from './Coins'
import MyPortfolio from './MyPortfolio'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/coins' component={Coins} />
          <Route path='/myportfolio' component={MyPortfolio} />
        </Switch>
      </div>
    );
  }
}

export default App;
