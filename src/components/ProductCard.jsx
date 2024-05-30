import React, { useState } from "react";
import ProductModal from "./ProductModal";

const ProductCard = ({ product, addToCart, removeFromCart, isInCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className="flex flex-col items-center justify-center hover:scale-110  
    transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline"
    >
      <div>
        <h2
          className="text-gray-700 font-semibold text-lg text-left
          truncate w-40 mt-1"
        >
          {product.title}
        </h2>
        <p
          className="w-40 text-gray-400 font-normal
         text-[10px] text-left"
        >
          {product.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
        <div className="h-[180px] my-1">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="flex justify-center gap-12 items-center w-full mt-5">
        <p className="text-green-600 font-semibold">${product.price}</p>
        <button
          onClick={openModal}
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
           text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
        >
          Details
        </button>
        {isModalOpen && <ProductModal product={product} onClose={closeModal} />}
        {isInCart ? (
          <button
            onClick={() => removeFromCart(product.id)}
            className="text-red-700 border-2 border-red-700 rounded-full font-semibold
             text-[12px] p-1 px-3 uppercase hover:bg-red-700 hover:text-white transition duration-300 ease-in"
          >
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="text-green-700 border-2 border-green-700 rounded-full font-semibold
             text-[12px] p-1 px-3 uppercase hover:bg-green-700 hover:text-white transition duration-300 ease-in"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
