// src/pages/HomeAppliances.js
import React from 'react';

function HomeAppliances() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Home Appliances</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img
              src="https://via.placeholder.com/300x200?text=Appliance+Item"
              className="card-img-top"
              alt="Appliance"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Blender</h5>
              <p className="card-text">$45.00</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
        {/* Add more appliance cards as needed */}
      </div>
    </div>
  );
}

export default HomeAppliances;
