import React from 'react';
import './NewNavbar.css';

const NewNavbar = () => {
  return (
    <div className="new-navbar">
      <div className="new-left-content">
        <span className="new-username">SIGN UP FOR UPDATES</span>
      </div>
      <div className="new-center-content">
        <input type="text" placeholder="Your email address" className="new-search-bar" />
      </div>
      <div className="new-right-content">
        <span className="new-nav-item">JOIN NOW</span>
      </div>
    </div>
  );
};

export default NewNavbar;
