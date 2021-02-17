import React, { Component, useState } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/Home/About";
import Contact from "./component/Home/Contact";
import View from "./component/Dosen/View";
import Tambah from "./component/Dosen/Tambah";
import Login from "./component/Login/Login";
import NavBarKu from "./component/Class/NavBarKu";
import Edit from "./component/Dosen/Edit";
import KelasComp from "./component/Hooks/Class/KelasComp";
import HooksComp from "./component/Hooks/Functional/HooksComp";
import HooksUseEffect from "./component/Hooks/Functional/HooksUseEffect";
import { CartContext } from "./CartContext";
import ProductComp from "./component/Hooks/Functional/ProductComp";
import HooksReducer from "./component/Hooks/Functional/HooksReducer";

const Main = () => {
    const[value,setValue] = useState(0)
    return ( <
        BrowserRouter >
        <
        CartContext.Provider value ={{value, setValue}} >
        <
        NavBarKu / >
        <
        Switch >
        <
        Route exact path = "/"
        component = { Home }
        /> <
        Route exact path = "/about"
        component = { About }
        /> <
        Route exact path = "/contact"
        component = { Contact }
        /> <
        Route exact path = "/mahasiswa"
        component = { View }
        /> <
        Route exact path = "/mahasiswa/tambah"
        component = { Tambah }
        /> <
        Route exact path = "/mahasiswa/edit"
        component = { Edit }
        /> <
        Route exact path = "/kelas"
        component = { KelasComp }
        /> <
        Route exact path = "/hooks"
        component = { HooksComp }
        /> <
        Route exact path = "/useeffect"
        component = { HooksUseEffect }
        /> 
        <
        Route exact path = "/produk"
        component = { ProductComp }
        /> 
        <
        Route exact path = "/reducer"
        component = { HooksReducer }
        /> 
        <
        Route exact path = "/Login"
        component = { Login }
        /> < /
        Switch > <
        /CartContext.Provider> < /
        BrowserRouter >
    );
}

export default Main;