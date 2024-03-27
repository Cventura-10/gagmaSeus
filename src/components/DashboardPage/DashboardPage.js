<<<<<<< HEAD
import React, { useState } from 'react';

const ProductPage = () => {
  const [product, setProduct] = useState({
    name: 'Motorcycle X',
    image: 'motorcycle-x.jpg', // Placeholder image name or URL
    price: '$10,000',
    specifications: ['Spec 1', 'Spec 2', 'Spec 3'],
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    accessories: ['Accessory 1', 'Accessory 2'],
  });

  const handleAddToCart = () => {
    // Handle adding the current product to the cart
    console.log('Product added to cart:', product);
  };

  return (
    <div>
      <h1>{product.name}</h1>
      
      <div>
        <img src={product.image} alt={product.name} style={{ maxWidth: '100%' }} />
      </div>
      
      <p>Price: {product.price}</p>
      
      <h2>Specifications</h2>
      <ul>
        {product.specifications.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
      
      <h2>Features</h2>
      <ul>
        {product.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      
      <h2>Available Accessories</h2>
      <ul>
        {product.accessories.map((accessory, index) => (
          <li key={index}>{accessory}</li>
        ))}
      </ul>
      
      <button onClick={handleAddToCart}>Add to Cart</button>
=======
import React from 'react';
import './Dashboard.css'; // This line correctly points to your Dashboard.css file in the same folder.

const DashboardPage = () => {
  return (
<<<<<<< HEAD
    <div>
      <h2>Dashboard</h2>
      {/* Add your dashboard content here */}
>>>>>>> 4d45f02 (Add controllers and middleware directories)
=======
    <div className="dashboard-container">
      <h2 className="dashboard-header">Motorcycle Store Dashboard</h2>
      {/* The rest of your component */}
>>>>>>> 3c62d4b (Commit my local changes before merging)
    </div>
  );
};

export default ProductPage;
