import React from "react";
import { useNavigate } from "react-router-dom"

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-row bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="h-40 w-md object-contain mb-4"
        />
      </div>
      <div className="p-6 w-md">
        <h3 className="text-sm font-semibold truncate">{product.title}</h3>
      
        <p className="text-yellow-500 text-sm">
          ⭐ {product.rating?.rate} ({product.rating?.count})
        </p>
        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700" onClick={() => navigate(`/products/${product.id}`)}>
          View
        </button>
      </div>
      <div className="p-6">
        <p className="text-black font-bold text-2xl mt-2">₹{product.price}</p>
        <p className="text-green-600 font-bold">
          20% off<br/>
          Bank Offer
        </p>
      </div>
      </div>
      );
};

      export default ProductCard;
