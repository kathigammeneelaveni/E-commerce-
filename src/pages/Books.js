// src/pages/Books.js
import React from 'react';

function Books() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Books</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img
              src="https://via.placeholder.com/300x200?text=Book+Cover"
              className="card-img-top"
              alt="Book"
            />
            <div className="card-body text-center">
              <h5 className="card-title">React Basics</h5>
              <p className="card-text">$15.00</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
        {/* Add more book cards as needed */}
      </div>
    </div>
  );
}

export default Books;
