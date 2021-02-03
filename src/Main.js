import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/Home/About";
import Contact from "./component/Home/Contact";
import Login from "./component/Login/Login";
import './style.css';
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Single Page Application</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/Login">Login</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/Login" component={Login}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;