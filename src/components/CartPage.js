// CartPage.js
import React from 'react';

const CartPage = ({ products = [], cart = {}, handleIncreaseQuantity, handleDecreaseQuantity }) => {
  if (!Array.isArray(products) || typeof cart !== 'object') {
    return <div>Error: Products data is missing or invalid.</div>;
  }

  const cartItems = Object.keys(cart).map(productId => {
    const product = products.find(p => p.id === parseInt(productId, 10));
    if (product) {
      return (
        <div key={productId} className="cart-item">
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <p>Price: {product.price} Rs</p>
          <p>Quantity: {cart[productId]}</p>
          <button onClick={() => handleIncreaseQuantity(productId)}>Increase</button>
          <button onClick={() => handleDecreaseQuantity(productId)}>Decrease</button>
        </div>
      );
    }
    return null;
  });

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? cartItems : <p>Your cart is empty.</p>}
    </div>
  );
};

export default CartPage;
