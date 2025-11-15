import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import './Checkout.css';

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(formData.phone)) newErrors.phone = 'Phone number is invalid (must be 10 digits starting with 6, 7, 8, or 9)';

    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.pincode) newErrors.pincode = 'PIN Code is required';
    else if (!/^\d{6}$/.test(formData.pincode)) newErrors.pincode = 'PIN Code is invalid (must be 6 digits)';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with checkout
      const orderDetails = {
        customer: formData,
        items: cart,
        total: getCartTotal(),
        paymentMethod: 'Cash on Delivery',
      };
      
      clearCart();
      // Navigate to confirmation page and pass order details in state
      navigate('/confirmation', { state: { orderDetails } });
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  if (cart.length === 0) {
     return (
        <div className="empty-cart">
          <h1 className="page-title">Your Cart is Empty</h1>
          <p>You must have items in your cart to check out.</p>
          <Link to="/products" className="btn btn-primary">Start Shopping</Link>
        </div>
      );
  }

  return (
    <div className="checkout-page">
      <h1 className="page-title">Checkout</h1>
      <form className="checkout-form" onSubmit={handleSubmit} noValidate>
        <h2>Shipping Information</h2>
        
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p className="form-error">{errors.name}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" value={formData.phone} onChange={handleChange} maxLength="10" />
          {errors.phone && <p className="form-error">{errors.phone}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" value={formData.address} onChange={handleChange} />
          {errors.address && <p className="form-error">{errors.address}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" id="city" value={formData.city} onChange={handleChange} />
          {errors.city && <p className="form-error">{errors.city}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input type="text" id="state" value={formData.state} onChange={handleChange} />
          {errors.state && <p className="form-error">{errors.state}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="pincode">PIN Code</label>
          <input type="text" id="pincode" value={formData.pincode} onChange={handleChange} />
          {errors.pincode && <p className="form-error">{errors.pincode}</p>}
        </div>
        
        <h2>Payment Method</h2>
        <div className="payment-method">
          <label>
            <input type="radio" name="payment" defaultChecked readOnly />
            Cash on Delivery (COD)
          </label>
          <p>You will pay in cash upon delivery of your order.</p>
        </div>
        
        <button type="submit" className="btn btn-success" style={{ width: '100%', marginTop: '1.5rem' }}>
          Place Order (Total: ₹{getCartTotal().toLocaleString('en-IN')})
        </button>
      </form>
    </div>
  );
};

export default Checkout;