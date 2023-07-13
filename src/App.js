import './index.css';
import Home from './Pages/Home'
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Farm from './Pages/Farm';
import Login from './Pages/Login';
import Register from './Pages/Register'
import React, {useState, useEffect} from 'react'
function App() {

  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route path = '/' element = {<Login />}/>
          <Route path = '/Register' element = {<Register />}/>
          <Route path = '/Home' element = {<Home />}/>
          <Route path = '/Farm' element = {<Farm />}/>          
        </Routes>
      </Navigation> 
    </BrowserRouter>
    );
}

export default App;