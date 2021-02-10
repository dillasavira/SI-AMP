import React, { Component } from "react";
import { Route, NavLink, HashRouter, BrowserRouter, Switch } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/Home/About";
import Contact from "./component/Home/Contact";
import Mahasiswa from "./component/Mahasiswa/View";
import Tambah from "./component/Mahasiswa/Tambah";
import Login from "./component/Login/Login";
import NavBarKu from "./component/Class/NavBarKu";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
      <NavBarKu />
        <Switch>
        <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/mahasiswa" component={Mahasiswa}/>
            <Route exact path="/mahasiswa/tambah" component={Tambah}/>
            <Route exact path="/Login" component={Login}/>
        </Switch>

      </BrowserRouter>
    );
  }
}
 
export default Main;