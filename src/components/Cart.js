import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, updateQuantity }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="w-1/3 pl-4">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      <ul>
        {cart.map(item => (
          <CartItem key={item.id} item={item} updateQuantity={updateQuantity} />
        ))}
      </ul>
      <p className="font-bold mt-4">Total: ${total.toFixed(2)}</p>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Checkout
      </button>

      
    </div>
  );
};

export default Cart;
