import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li
              key={item.id}
              className="border p-2 my-2 flex justify-between items-center"
            >
              <div>
                <p>{item.title}</p>
                <p>${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-4">Total: ${cartTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
