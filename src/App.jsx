import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductView from "./ProductView";
import ProductList from "./ProductList";
import Footer from "./Footer";
import './App.css'

function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="bg-gray-100 min-h-scrn">
      <Navbar />
            <ProductList />
      <ProductView product={product} />
      <Footer/>
    </div>
  );
}

export default App;
