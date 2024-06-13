import React from 'react';

const CartItem = ({ item, updateQuantity }) => {
  return (
    <li className="flex justify-between items-center mb-2">
      <span>
        {item.name} - ${item.price.toFixed(2)} x {item.quantity}
      </span>
      <div className="flex items-center">
        <button
          className="bg-red-500 text-white hover:text-black hover:bg-white p-2 rounded"
          onClick={() => updateQuantity(item.id, -1)}
        >
          -
        </button>
        <button
          className="bg-green-500 text-white p-2 rounded ml-2 hover:text-black hover:bg-white"
          onClick={() => updateQuantity(item.id, 1)}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
