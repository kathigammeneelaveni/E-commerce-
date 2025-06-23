// src/pages/Clothing.js
import React from 'react';

function Clothing() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Clothing</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img
              src="https://via.placeholder.com/300x200?text=Clothing+Item"
              className="card-img-top"
              alt="Clothing"
            />
            <div className="card-body text-center">
              <h5 className="card-title">T-Shirt</h5>
              <p className="card-text">$25.00</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
        {/* Add more clothing cards as needed */}
      </div>
    </div>
  );
}

export default Clothing;
