// src/pages/Categories.js
import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Browse by Categories</h2>
      <div className="list-group">
        <Link to="/categories/electronics" className="list-group-item list-group-item-action">
          Electronics
        </Link>
        <Link to="/categories/clothing" className="list-group-item list-group-item-action">
          Clothing
        </Link>
        <Link to="/categories/home-appliances" className="list-group-item list-group-item-action">
          Home Appliances
        </Link>
        <Link to="/categories/books" className="list-group-item list-group-item-action">
          Books
        </Link>
      </div>
    </div>
  );
}

export default Categories;
