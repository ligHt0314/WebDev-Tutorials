import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, getCartItemCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h1 className="page-title">Your Cart is Empty</h1>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/products" className="btn btn-primary">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="page-title">Your Shopping Cart</h1>
      <div className="cart-container">
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} />
              <div className="cart-item-details">
                <h3><Link to={`/products/${item.id}`}>{item.name}</Link></h3>
                <p className="product-price">₹{item.price.toLocaleString('en-IN')}</p>
              </div>
              <div className="cart-item-actions">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, e.target.value)}
                  aria-label={`Quantity for ${item.name}`}
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <p>
            <span>Subtotal ({getCartItemCount()} items)</span>
            <span>₹{getCartTotal().toLocaleString('en-IN')}</span>
          </p>
          <p>
            <span>Shipping</span>
            <span>FREE</span>
          </p>
          <p>
            <strong>Total</strong>
            <strong>₹{getCartTotal().toLocaleString('en-IN')}</strong>
          </p>
          <Link to="/checkout" className="btn btn-success">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;