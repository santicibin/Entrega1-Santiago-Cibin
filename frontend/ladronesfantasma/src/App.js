import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import GaleriaPage from './pages/GaleriaPage';

function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element ={<HomePage/>} />
        <Route path='nosotros' element ={<NosotrosPage/>} />
        <Route path='contacto' element ={<ContactoPage/>} />
        <Route path='galeria' element ={<GaleriaPage/>} />
      </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
