import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />
      <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>
      <p className="text-green-600 font-bold mt-2">₹{product.price}</p>
      <p className="text-yellow-500 text-sm">
        ⭐ {product.rating?.rate} ({product.rating?.count})
      </p>
      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
        View
      </button>
    </div>
  );
};

export default ProductCard;
