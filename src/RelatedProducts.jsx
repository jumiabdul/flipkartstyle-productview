import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"


const RelatedProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    // Fetch all products
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        // Shuffle and pick 4 random products
        const shuffled = data.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 4);
        setProducts(selected);
      });
  }, []);

  return (
    <div className="p-4 bg-white">
      <h2 className="text-2xl font-bold mb-6">Top Deals</h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-contain mb-4"
            />
            {/*
            <h3 className="text-sm font-semibold line-clamp-2">
              {product.title}
            </h3>
            <p className="text-green-600 font-bold mt-2">₹{product.price}</p>
            <p className="text-yellow-500 text-sm">
              ⭐ {product.rating?.rate} ({product.rating?.count})
            </p>*/}
            <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700" onClick={()=>navigate("/products")}>
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
