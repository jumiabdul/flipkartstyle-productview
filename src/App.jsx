import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductView from "./ProductView";
import ProductList from "./ProductList";
import Footer from "./Footer";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home";
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
    <div className="bg-gray-100 min-h-scrn">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/products/:id" element={<ProductView/>} />            
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
