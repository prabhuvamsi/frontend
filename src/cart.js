import React from 'react';

const Cart = ({ cart }) => {
  // Defaulting to an empty array if cart is undefined
  const cartItems = cart || [];

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div className="cart-item-details">
            <h3>{item.title}</h3>
            <p>Price: {item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
