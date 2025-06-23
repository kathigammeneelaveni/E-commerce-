// src/pages/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart, getTotal } = useContext(CartContext);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="row">
          <div className="col-md-8">
            {cart.map(item => (
              <div key={item.id} className="d-flex mb-3 align-items-center">
                <img src="https://via.placeholder.com/100" alt={item.name} className="me-3" />
                <div>
                  <h5>{item.name}</h5>
                  <p>${item.price.toFixed(2)}</p>
                  <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <div className="cart-total">
              <h4>Total: ${getTotal()}</h4>
              <button className="btn btn-success w-100">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
