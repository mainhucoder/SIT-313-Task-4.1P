import React from 'react';
import './Navbar.css';

const Navbar = () => (
    <div className="custom-navbar">
      <div className="custom-left-content">
        <span className="custom-username">DEV@Deakin</span>
      </div>
      <div className="custom-center-content">
        <input type="text" placeholder="Search..." className="custom-search-bar" />
      </div>
      <div className="custom-right-content">
        <span className="custom-nav-item">Post</span>
        <span className="custom-nav-item">Login</span>
      </div>
    </div>
  );
  


export default Navbar;
