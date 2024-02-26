import React, { useEffect, useState } from 'react';
import { fetchSalesOrders } from '../../api/api';

export default function SalesOrders() {
  const [salesOrders, setSalesOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSalesOrders = async () => {
      try {
        const ordersData = await fetchSalesOrders();
        setSalesOrders(ordersData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching sales orders:', error);
        setError(error);
        setIsLoading(false);
      }
    };

    loadSalesOrders();
  }, []); // Empty dependency array means this effect runs once on mount

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div>
      <h2>Sales Orders</h2>
      {salesOrders.length > 0 ? (
        salesOrders.map(order => (
          <div key={order._id}> {/* Adjust key as needed based on your data structure */}
            <p>Customer: {order.customer}</p>
            <p>Status: {order.status}</p>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>{item.name}: {item.quantity}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No sales orders found.</p>
      )}
    </div>
  );
}
