import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const { state } = useLocation();
  const orderDetails = state?.orderDetails;

  if (!orderDetails) {
    return (
      <div className="order-summary-container">
        <div className="order-summary">
          <h2>No Order Found</h2>
          <p>Please complete the checkout process to see your order confirmation.</p>
          <Link to="/" className="btn btn-primary">Go to Home</Link>
        </div>
      </div>
    );
  }

  const { customer, items, total, paymentMethod } = orderDetails;

  return (
    <div className="order-confirmation">
      <div className="order-summary">
        <h2>Thank You For Your Order!</h2>
        <p>Your order has been placed successfully.</p>
        
        <h3>Shipping to:</h3>
        <p><strong>{customer.name}</strong></p>
        <p>{customer.email}</p>
        <p>{customer.phone}</p>
        <p>{customer.address}</p>
        <p>{customer.city}, {customer.state} - {customer.pincode}</p>

        <h3>Order Summary:</h3>
        {items.map(item => (
          <p key={item.id}>
            {item.name} (x{item.quantity}) - ₹{ (item.price * item.quantity).toLocaleString('en-IN') }
          </p>
        ))}
        
        <p><strong>Total: ₹{total.toLocaleString('en-IN')}</strong></p>
        <p><strong>Payment Method:</strong> {paymentMethod}</p>

        <Link to="/" className="btn btn-primary" style={{marginTop: '1.5rem', width: '100%'}}>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;