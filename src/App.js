import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import Authorize from './Authorize';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/openid/authorize" component={Authorize} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}


export default App;
