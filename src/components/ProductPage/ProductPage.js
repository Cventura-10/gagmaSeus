// ProductPage.js
import React from 'react';
import PropTypes from 'prop-types';

const ProductPage = () => {
<<<<<<< HEAD
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
=======
  // Use match.params.productId to fetch and display details of the selected product
  // const productId = match.params.productId; // Commented out to address the unused variable warning

  // Dummy data, replace with your actual product data
  const product = {
    id: 1,
    name: 'Motorcycle 1',
    price: 5000,
    image: 'motorcycle1.jpg',
    specifications: '...',
    features: '...',
    accessories: ['Accessory 1', 'Accessory 2'],
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price}</p>
      <h3>Specifications:</h3>
      <p>{product.specifications}</p>
      <h3>Features:</h3>
      <p>{product.features}</p>
      <h3>Available Accessories:</h3>
      <ul>
        {product.accessories.map((accessory, index) => (
          <li key={index}>{accessory}</li>
        ))}
      </ul>
      {/* Add "Add to Cart" button and other relevant information */}
>>>>>>> 4d45f02 (Add controllers and middleware directories)
    </div>
  );
};

ProductPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ProductPage;
