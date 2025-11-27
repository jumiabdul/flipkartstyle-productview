import React from "react";
import flipkartLogo from "./assets/logo.png"; 

const Navbar = () => {
  return (
    <nav className="bg-blue-600 px-6 py-3 mb-6 flex items-center justify-center gap-8 shadow-md">

  <img src={flipkartLogo} alt="Flipkart Logo" className="h-10 w-20" />

  <input
    type="text"
    placeholder="Search for products, brands and more"
    className="px-4 py-2 rounded-sm focus:outline-none"
  />

  <div className="flex items-center gap-6 text-white font-medium">
    <button>Login</button>
    <button>Cart</button>
    <button>Seller</button>
    <button>More</button>
  </div>

</nav>

  );
};

export default Navbar;
