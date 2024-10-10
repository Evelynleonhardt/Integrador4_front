/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Rutas from './routes/Rutas';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Rutas/>  
    <Footer/>
    </BrowserRouter>
  )
}

export default App