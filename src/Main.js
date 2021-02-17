import React, { Component, createContext, useReducer, useState } from "react";
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
import Tagihan from "./component/Hooks/Functional/Tagihan";

export const keranjangContext = createContext()

const initialState={
    jumlah :1,
    hargaSatuan:10000,
    hargaTotal:10000
}
const reducer =(state, action)=>{
    switch(action. type){
        case 'tambah': return {
            ...state,
            jumlah: state.jumlah +1,
            hargaTotal: state.hargaSatuan + (state.hargaSatuan *state.jumlah)
        }
        case 'kurang': return {
            ...state,
            jumlah: state.jumlah -1,
            hargaTotal:  (state.hargaSatuan *state.jumlah)- state.hargaSatuan
        }
        default:
            return state
    }
}

const Main = () => {
    const[value,setValue] = useState(0)
    const[count, dispatch] = useReducer(reducer, initialState)
    return ( <
        BrowserRouter >
        <
        CartContext.Provider value ={{value, setValue}} >
        <
        NavBarKu / >
        <keranjangContext.Provider value={{keranjangState: count, keranjangDispatch: dispatch}}>
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
        Route exact path = "/tagihan"
        component = { Tagihan }
        /> 
        <
        Route exact path = "/Login"
        component = { Login }
        /> < /
        Switch > 
        </keranjangContext.Provider><
        /CartContext.Provider> < /
        BrowserRouter >
    );
}

export default Main;