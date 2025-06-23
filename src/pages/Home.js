import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Make sure to create this file

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-white text-center">
        <div className="overlay">
          <div className="hero-content container">
            <h1 className="display-4 fw-bold">Welcome to SoftStore</h1>
            <p className="lead">Discover the best deals on our premium products!</p>
            <Link to="/shop">
              <button className="btn btn-lg btn-warning">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row g-4">
          {[1, 2, 3].map((i) => (
            <div className="col-md-4" key={i}>
              <div className="card h-100 shadow-sm">
                <img
                  src={`https://via.placeholder.com/300x200?text=Product+${i}`}
                  className="card-img-top"
                  alt={`Product ${i}`}
                />
                <div className="card-body">
                  <h5 className="card-title">Product {i}</h5>
                  <p className="card-text">$ {(i * 25).toFixed(2)}</p>
                  <Link to="/cart" className="btn btn-primary w-100">
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Promo Banner */}
      <div className="promo-banner text-white text-center py-4">
        <h3>🎉 20% Off Your First Order - Limited Time Only!</h3>
        <Link to="/shop">
          <button className="btn btn-dark btn-lg mt-3">Start Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
