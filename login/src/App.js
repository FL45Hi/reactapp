// import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from './components/Login'
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <h1>This is Login App</h1>
    </div>
  );
}

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </Switch>
  </Router>
)

export default Root;
