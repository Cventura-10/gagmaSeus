import React from 'react';

const ProductCatalog = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 14.99 },
    { id: 4, name: 'Product 4', price: 24.99 },
  ];

  return (
    <div className="product-catalog">
      <h2>Product Catalog</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          {/* Add more details or functionality for each product */}
        </div>
      ))}
    </div>
  );
};

export default ProductCatalog;
