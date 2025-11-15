import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import { allProducts } from '../data/products.jsx';
import './Home.css';

const Home = () => {
  // Show products marked as featured
  const featuredProducts = allProducts.filter(product => product.isFeatured === true);
  
  return (
    <div className="home-page">
      <div className="home-hero">
        <h1>Welcome to MyStore</h1>
        <p>Your one-stop shop for everything cool.</p>
        <div className="home-hero-actions">
          <Link to="/products" className="btn btn-primary">Shop All Products</Link>
          <Link to="/login" className="btn btn-secondary">Login / Signup</Link>
        </div>
      </div>
      
      <h2 className="page-title" style={{ textAlign: 'center' }}>Featured Products</h2>
      <div className="product-grid">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;