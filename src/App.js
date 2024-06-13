import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const products = [
  { id: 1, name: 'EverBloom', price: 10.00, image: 'https://via.placeholder.com/250' },
  { id: 2, name: 'TechSavvy 2', price: 20.00, image: 'https://via.placeholder.com/250' },
  { id: 3, name: 'CozyNest 3', price: 30.00, image: 'https://via.placeholder.com/250' },
  { id: 4, name: 'Flavor Fiesta 4', price: 40.00, image: 'https://via.placeholder.com/250' },
  { id: 5, name: 'SilentSnap 5', price: 50.00, image: 'https://via.placeholder.com/250' },
  { id: 6, name: 'GreenHaven 6', price: 60.00, image: 'https://via.placeholder.com/250' },
];
function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, amount) => {
    setCart((prevCart) => 
      prevCart.map(item => 
        item.id === productId ? { ...item, quantity: item.quantity + amount } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Simple E-Commerce Cart</h1>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex">
        <ProductList products={filteredProducts} addToCart={addToCart} cart={cart} updateQuantity={updateQuantity} />
        <Cart cart={cart} updateQuantity={updateQuantity} />
      </div>
    </div>
  );
}

export default App;