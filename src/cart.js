import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={item.title} className="cart-item-image" />
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
