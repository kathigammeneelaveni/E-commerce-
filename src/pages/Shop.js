// src/pages/Shop.js
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

function Shop() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [addedProductId, setAddedProductId] = useState(null);

  useEffect(() => {
    // Fetch products from backend
    axios.get('http://localhost:8088/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Failed to fetch products:', err));
  }, []);

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    addToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 2000);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Shop All Products</h2>

      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={product.imageUrl || "https://via.placeholder.com/150"}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">₹{product.price.toFixed(2)}</p>
                <button
                  className="btn btn-primary mb-2"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                {addedProductId === product.id && (
                  <small className="text-success text-center">✔ Added!</small>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
