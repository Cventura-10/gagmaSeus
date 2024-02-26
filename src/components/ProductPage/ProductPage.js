import React from 'react';

const ProductPage = () => {
  // Product details state or props can be passed here

  return (
    <div>
      <h1>Product Name</h1>
      <img src="motorcycle-image.jpg" alt="Product" />
      <p>Specifications: Spec 1, Spec 2, Spec 3</p>
      <p>Features: Feature 1, Feature 2</p>
      <p>Price: $10,000</p>
      <button>Add to Cart</button>
      <h2>Available Accessories</h2>
      <ul>
        <li>Accessory 1</li>
        <li>Accessory 2</li>
      </ul>
    </div>
  );
};

export default ProductPage;
