import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Search from "./components/Search";
import Cart from "./components/Cart";
import { Toaster, toast } from "react-hot-toast";
import Navbar from "./components/Navbar";

const App = () => {

  const [searchQuery, setSearchQuery] = useState("");
  
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success("Product Added.");
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    toast.success("Product Removed.");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div>
        <Navbar/>
      </div>
      <header className="bg-white p-4 shadow-md ">
        <h1 className="text-2xl font-bold">Product Listing</h1>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </header>
      <main className="p-4">
        <ProductList
          searchQuery={searchQuery}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          cart={cart}
        />
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </main>
      <Toaster />
    </div>
  );
};

export default App;
