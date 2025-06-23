// src/components/CartItem.js
import React from 'react';

function CartItem({ item, removeFromCart }) {
  return (
    <div className="list-group-item">
      <h5>{item.name}</h5>
      <p>${item.price}</p>
      <button className="btn btn-danger" onClick={() => removeFromCart(item)}>Remove</button>
    </div>
  );
}

export default CartItem;
