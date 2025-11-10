import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <div className="nav-inner">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
