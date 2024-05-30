import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Spinner from "./Spinner";
import { toast } from "react-hot-toast";

const API_URL = "https://fakestoreapi.com/products";

const ProductList = ({ searchQuery, addToCart, removeFromCart, cart }) => {

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const result = await fetch(API_URL);
      const data = await result.json();
      setProducts(data);
    } catch (error) {
      toast.error("Error occured..");
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : products.length > 0 ? (
        <div
          className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
           max-w-6xl p-2 mx-auto space-x-5
             space-y-10 min-h-[80vh]"
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              isInCart={cart.some((item) => item.id === product.id)}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
