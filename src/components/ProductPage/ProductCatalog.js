<<<<<<< HEAD
import React, { useState, useEffect } from "react";
// src/components/ProductPage/ProductCatalog.js

import { fetchProducts } from '../../api/api'; // Adjust the path as necessary

// Use fetchProducts within the component
=======
// ProductCatalog.js
import React, { useState, useEffect } from 'react';
import { fetchInventoryData, addProduct } from '../api';
>>>>>>> 4d45f02 (Add controllers and middleware directories)

const ProductCatalog = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

<<<<<<< HEAD
    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        loadProducts();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
=======
  useEffect(() => {
    // Fetch inventory data when the component mounts
    fetchInventoryData()
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => console.error('Error fetching inventory data:', error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addProduct(newProduct);
      if (response.success) {
        setProducts([...products, newProduct]);
        setFilteredProducts([...filteredProducts, newProduct]);
        setNewProduct({ name: '', description: '' });
      } else {
        console.error('Error adding product:', response.error);
      }
    } catch (error) {
      console.error('Error adding product:', error);
>>>>>>> 4d45f02 (Add controllers and middleware directories)
    }
  };

<<<<<<< HEAD
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Product Catalog</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        {/* Add additional product details here */}
                    </li>
                ))}
            </ul>
        </div>
=======
  const handleFilter = () => {
    const { minPrice, maxPrice } = filterCriteria;
    const filtered = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
    setFilteredProducts(filtered);
  };

  const handleSearch = () => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h2>Product Catalog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={newProduct.name} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} required />

        <label htmlFor="description">Description:</label>
        <textarea id="description" value={newProduct.description} onChange={e => setNewProduct({ ...newProduct, description: e.target.value })} required />

        <button type="submit">Add Product</button>
      </form>

      <div>
        <h3>Filter by Price:</h3>
        <label htmlFor="minPrice">Min Price:</label>
        <input type="text" id="minPrice" value={filterCriteria.minPrice} onChange={e => setFilterCriteria({ ...filterCriteria, minPrice: e.target.value })} />

        <label htmlFor="maxPrice">Max Price:</label>
        <input type="text" id="maxPrice" value={filterCriteria.maxPrice} onChange={e => setFilterCriteria({ ...filterCriteria, maxPrice: e.target.value })} />

        <button onClick={handleFilter}>Filter</button>
      </div>

      <div>
        <h3>Search:</h3>
        <label htmlFor="searchQuery">Search Query:</label>
        <input type="text" id="searchQuery" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

        <button onClick={handleSearch}>Search</button>
      </div>

      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
>>>>>>> 4d45f02 (Add controllers and middleware directories)
  );
};

export default ProductCatalog;
