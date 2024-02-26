import React, { useState, useEffect } from "react";
// src/components/ProductPage/ProductCatalog.js

import { fetchProducts } from '../../api/api'; // Adjust the path as necessary

// Use fetchProducts within the component

const ProductCatalog = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

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
    }

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
  );
};

export default ProductCatalog;
