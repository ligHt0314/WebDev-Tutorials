import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import './Header.css';

const Header = () => {
  const { getCartItemCount } = useCart();
  const itemCount = getCartItemCount();

  return (
    <header className="app-header">
      <div className="logo">
        <Link to="/">ShopIfy</Link>
      </div>
      <nav className="app-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li>
            <Link to="/cart" className="cart-icon">
              Cart
              {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;