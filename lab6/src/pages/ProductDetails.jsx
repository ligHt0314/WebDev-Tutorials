import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductDetails.css';

const ProductDetails = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const product = allProducts.find(p => p.id === parseInt(productId, 10));

  if (!product) {
    // Basic error handling if product not found
    return (
      <div>
        <h1 className="page-title">Error</h1>
        <p>Product not found. It may have been removed or the ID is incorrect.</p>
        <Link to="/products" className="btn btn-primary">Back to Products</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    // You could add a "toast" message here
    console.log("Added to cart:", product.name);
  };

  return (
    <div className="product-details-page">
      <h1 className="page-title">{product.name}</h1>
      <div className="product-details">
        <div className="product-details-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="product-details-info">
          <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
          <h3>Product Description</h3>
          <p>{product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <button onClick={handleAddToCart} className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;