import React, { useState, useEffect } from 'react';
import { fetchSalesOrders } from './api/api'; // Asegúrate de que esta ruta sea correcta
import { fetchAssets } from './api/api';

const SalesOrdersComponent = () => {
  const [salesOrders, setSalesOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSalesOrders = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchSalesOrders();
        if (Array.isArray(data)) {
          setSalesOrders(data);
        } else {
          throw new Error('Data is not an array');
        }
      } catch (err) {
        console.error('Failed to fetch sales orders:', err);
        setError(err.message || 'Failed to fetch sales orders');
      } finally {
        setIsLoading(false);
      }
    };

    getSalesOrders();
  }, []);

  return (
    <div>
      <h2>Sales Orders</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        Array.isArray(salesOrders) && salesOrders.length > 0 ? (
          <ul>
            {salesOrders.map(order => (
              <li key={order.id ?? 'default-id'}>{order.name ?? 'No Name'} - {order.amount ?? 0}</li>
            ))}
          </ul>
        ) : <p>No sales orders found.</p>
      )}
    </div>
  );
};

export default SalesOrdersComponent;
