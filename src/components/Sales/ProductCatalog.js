import React from 'react';

const ProductCatalog = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    { id: 3, name: 'Product 3', price: 20 },
  ];

  return (
    <div>
      <h1>Product Catalog</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - Price: ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCatalog;
