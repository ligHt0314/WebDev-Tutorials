import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img src={product.imageUrl} alt={product.name} />
      </Link>
      <div className="product-card-content">
        <h3>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="product-price">₹{product.price.toLocaleString('en-IN')}</p>
        <Link to={`/products/${product.id}`} className="btn btn-secondary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;