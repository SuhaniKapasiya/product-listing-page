import React from "react";

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-11/12 sm:w-3/4 lg:w-1/2 relative ">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold text-red-600"
        >
          &times;
        </button>
        <h2 className="text-2xl mb-4">{product.title}</h2>
        <div className="h-[180px] my-1">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>
        <p>{product.description}</p>
        <p className="mt-2 text-xl font-semibold">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductModal;
