import React from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart, cart, updateQuantity }) => {
  return (
    <div className="w-2/3 pr-4">
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} cart={cart} updateQuantity={updateQuantity} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
