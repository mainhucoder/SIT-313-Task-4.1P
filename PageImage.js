import React from 'react';
import './PageImage.css';

const PageImage = () => {
  return (
    <div className="pageimagebar">
      <img
        src="/deakin.jpg" // Replace with the actual image path
        alt="Cover"
        className="pageimage"
      />
      <h2 className="pagetext">FEATURED ARTICLES</h2>
    </div>
  );
};

export default PageImage;