import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import GameMarketPage from "./Components/GameMarketPage";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <div className="top-header">
              <div className="logo">
                <a href="/" >
                  <img src="/assets/Logo.gif" alt="logo" />
                </a>
              </div>
            </div>
            <Navigation />
          </header>
          <div className="wrapper main-page">
              <Route exact path="/" component={Home} />
              <Route path="/marketing" component={GameMarketPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
