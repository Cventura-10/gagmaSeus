import React, { useState } from 'react';

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({ minPrice: 0, maxPrice: 0 });
  const [searchQuery, setSearchQuery] = useState('');
  const [newProduct, setNewProduct] = useState({ name: '', description: '' });

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const editProduct = (productId, updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  const handleFilter = (filterCriteria) => {
    // Filter the list of products based on the filterCriteria and update the filteredProducts state variable.
    const { minPrice, maxPrice } = filterCriteria;

    const filtered = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );

    setFilteredProducts(filtered);
  };

  const handleSearch = (searchQuery) => {
    // Filter the list of products based on searchQuery and update the filteredProducts state variable.
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  const validateProduct = ({ name, description }) => {
    if (name.trim() === '' || description.trim() === '') {
      alert('Please enter a valid name and description.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateProduct(newProduct)) {
      return;
    }

    addProduct(newProduct);
    setNewProduct({ name: '', description: '' });
  };

  return (
    <div>
      {/* Render filter controls and search input */}
      <div>
        <label>
          Min Price:
          <input
            type="number"
            value={filterCriteria.minPrice}
            onChange={(e) =>
              setFilterCriteria({ ...filterCriteria, minPrice: parseInt(e.target.value) })
            }
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            value={filterCriteria.maxPrice}
            onChange={(e) =>
              setFilterCriteria({ ...filterCriteria, maxPrice: parseInt(e.target.value) })
            }
          />
        </label>
        <button onClick={() => handleFilter(filterCriteria)}>Filter</button>
      </div>
      <div>
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button onClick={() => handleSearch(searchQuery)}>Search</button>
      </div>

      {/* Render product list */}
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id}>
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            {/* Implement the edit and delete functionality */}
            <button onClick={() => editProduct(product.id, { ...product, name: 'Updated Name' })}>
              Edit
            </button>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}

      {/* Implement functionality to add new products */}
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            />
          </label>
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default ProductCatalog;
