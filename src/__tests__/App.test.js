import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('renders App component and adds products to cart', () => {
  render(<App />);
  
  // Check if the search input is rendered
  const searchInput = screen.getByPlaceholderText('Search for products...');
  expect(searchInput).toBeInTheDocument();

  // Check if product list is rendered
  const product1 = screen.getByText('EverBloom');
  expect(product1).toBeInTheDocument();
  const product2 = screen.getByText('TechSavvy 2');
  expect(product2).toBeInTheDocument();

  // Add Product 1 to the cart
  const addToCartButton = screen.getAllByText('Add to Cart')[0];
  fireEvent.click(addToCartButton);

  // Check if Product 1 is added to the cart
  const cartItem = screen.getByText('EverBloom - $10.00 x 1');
  expect(cartItem).toBeInTheDocument();

  // Check if the total is correct
  const total = screen.getByText('Total: $10.00');
  expect(total).toBeInTheDocument();
});
