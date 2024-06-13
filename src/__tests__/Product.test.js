import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Product from '../components/Product';

const product = {
  id: 1,
  name: 'EverBloom',
  price: 10.0,
  image: 'https://via.placeholder.com/150'
};

test('renders Product component and handles add to cart', () => {
  const addToCart = jest.fn();
  const updateQuantity = jest.fn();
  const cart = [];

  render(<Product product={product} addToCart={addToCart} cart={cart} updateQuantity={updateQuantity} />);

  // Check if product details are rendered
  const productName = screen.getByText('EverBloom');
  expect(productName).toBeInTheDocument();
  const productPrice = screen.getByText('$10.00');
  expect(productPrice).toBeInTheDocument();

  // Check if add to cart button is rendered and works
  const addToCartButton = screen.getByText('Add to Cart');
  fireEvent.click(addToCartButton);
  expect(addToCart).toHaveBeenCalledTimes(1);
});
