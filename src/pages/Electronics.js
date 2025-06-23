// src/pages/Electronics.js
import React from 'react';

function Electronics() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Electronics</h2>
      <div className="row">
        {/* Example product card */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img
              src="https://via.placeholder.com/300x200?text=Electronics+Item"
              className="card-img-top"
              alt="Electronics Product"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Electronic Gadget</h5>
              <p className="card-text">$199.00</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
        {/* Repeat for more electronics */}
      </div>
    </div>
  );
}

export default Electronics;
