import React from 'react';

const Product = ({ product, addToCart, cart, updateQuantity }) => {
  const cartItem = cart.find(item => item.id === product.id);

  return (
    <div className="bg-white p-4 border rounded shadow">
      <img src={product.image} alt={product.name} className="mb-2" />
      <h3 className="font-bold mb-2">{product.name}</h3>
      <p className="mb-2">${product.price.toFixed(2)}</p>
      {cartItem ? (
        <div className="flex items-center">
          <button
            className="bg-red-500 text-white p-2 rounded"
            onClick={() => updateQuantity(product.id, -1)}
          >
            -
          </button>
          <span className="mx-2">{cartItem.quantity}</span>
          <button
            className="bg-green-500 text-white p-2 rounded"
            onClick={() => updateQuantity(product.id, 1)}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="bg-green-500 text-white p-2 rounded"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Product;
