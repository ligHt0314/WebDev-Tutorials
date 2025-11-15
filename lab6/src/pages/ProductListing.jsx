import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import { allProducts } from '../data/products.jsx';
import './ProductListing.css';

const ProductListing = () => {
  const [products, setProducts] = useState(allProducts);
  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(200000);

  // Get all unique categories
  const categories = ['All', ...new Set(allProducts.map(p => p.category))];

  useEffect(() => {
    let filtered = allProducts;
    
    // Filter by category
    if (category !== 'All') {
      filtered = filtered.filter(p => p.category === category);
    }
    
    // Filter by price
    filtered = filtered.filter(p => p.price <= maxPrice);
    
    setProducts(filtered);
  }, [category, maxPrice]);

  return (
    <div className="product-listing">
      <h1 className="page-title">Products</h1>
      <div className="filters">
        <div className="filter-group">
          <label htmlFor="category-filter">Category</label>
          <select 
            id="category-filter"
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="filter-group filter-group-price">
          <label htmlFor="price-filter">Max Price: ₹{maxPrice.toLocaleString('en-IN')}</label>
          <input
            type="range"
            id="price-filter"
            min="0"
            max="200000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products match your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default ProductListing;