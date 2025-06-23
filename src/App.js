// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './styles/custom.css';
import HomeAppliances from './pages/HomeAppliances';
import Electronics from './pages/Electronics';
import Clothing from './pages/Clothing';
import Books from './pages/Books';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/categories/electronics" element={<Electronics />} />
        <Route path="/categories/clothing" element={<Clothing />} />
        <Route path="/categories/home-appliances" element={<HomeAppliances />} />
        <Route path="/categories/books" element={<Books />} />
      </Routes>
    </Router>
  );
}

export default App;
