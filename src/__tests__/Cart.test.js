import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cart from '../components/Cart';

const cart = [
  { id: 1, name: 'EverBloom', price: 10.0, quantity: 1 }
];

test('renders Cart component and updates quantity', () => {
  const updateQuantity = jest.fn();

  render(<Cart cart={cart} updateQuantity={updateQuantity} />);

  // Check if cart item is rendered
  const cartItem = screen.getByText('EverBloom - $10.00 x 1');
  expect(cartItem).toBeInTheDocument();

  // Check if total is correct
  const total = screen.getByText('Total: $10.00');
  expect(total).toBeInTheDocument();

  // Check if the update quantity buttons are rendered and work
  const incrementButton = screen.getAllByText('+')[0];
  fireEvent.click(incrementButton);
  expect(updateQuantity).toHaveBeenCalledWith(1, 1);

  const decrementButton = screen.getAllByText('-')[0];
  fireEvent.click(decrementButton);
  expect(updateQuantity).toHaveBeenCalledWith(1, -1);
});
