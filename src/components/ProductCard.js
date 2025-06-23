// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product, addToCart }) {
  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card h-100">
        <img src={product.imageUrl} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <h6 className="card-price">${product.price}</h6>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
