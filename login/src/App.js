// import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from './components/Login'
import Register from './components/Register';

function App() {
  return (
    <>
    <h1>This is Login App</h1>
    <div style={{ margin: "20px", alignItems: "flex-start", width: "20%"}}>
      
      
      <Link to="/login" style={{ textDecoration: "none", float:"left"}}>
          Login
      </Link>

      <Link to="/register" style={{ textDecoration: "none", float:"right" }}>
          Register
      </Link>

      

    </div>
    </>
  );
}

const Root = () => (
  <Router>
    {/* <App /> */}
    <Switch>
      <Route exact path="/" component={App} />
      <Route  path='/login' component={Login} />
      <Route  path='/register' component={Register} />
    </Switch>
  </Router>
)

export default Root;
