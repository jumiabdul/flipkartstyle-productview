import React from "react";

const ProductView = ({ product }) => {
  if (!product) return <p className="text-center text-gray-500">No product data available</p>;

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full bg-white rounded-lg">
      {/* Product Image */}
      <div className="flex-1 flex flex-col gap-3 justify-center items-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-w-sm border rounded-lg shadow"
        />
        <div className="flex gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md font-semibold">
            Add to Cart
          </button>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-semibold">
            Buy Now
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex-2 space-y-4">
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <h3 className="text-black text-xl font-semibold">₹{product.price}</h3>
        <div className="flex gap-3">
          <span className="text-white bg-green-500 rounded-md font-medium">
            {product.rating?.rate}⭐
          </span>
          <span className="text-gray-500 font-bold">({product.rating?.count} reviews)</span>
        </div>
        <div className="flex gap-3.5">
          <span className="text-gray-500 font-bold">Color:</span>
          <div className="h-10 w-10 bg-amber-950"></div>
          <div className="h-10 w-10 bg-blue-950"></div>
          <div className="h-10 w-10 bg-pink-700"></div>
          <div className="h-10 w-10 bg-yellow-600"></div>

        </div>
        <div>
          <p className="font-bold"> Available offers</p>
          <p>Bank Offer5% cashback on Axis Bank Flipkart Debit Card up to ₹750T&C</p>
          <p>Bank Offer5% cashback on Flipkart SBI Credit Card upto ₹4,000 per calendar quarterT&C</p>
          <p>Bank OfferFlat ₹50 off on Flipkart Bajaj Finserv Insta EMI Card. Min Booking Amount: ₹2,500T&C</p>
          <p>No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999View Plans</p>
          <p>+15 more offers</p>

        </div>
        <div>
          <p className="font-bold"> Delivery by 3 Dec, Wednesday?</p>
          <p>if ordered before 12:59 PM</p>

        </div>
        <p className="text-gray-700">{product.description}</p>


      </div>
    </div>
  );
};

export default ProductView;
