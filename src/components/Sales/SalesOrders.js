<<<<<<< HEAD
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
=======
// SalesOrders.js
import React, { useState, useEffect } from 'react';
import api from '../../api/api'; // Adjust the import path

const SalesOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch sales data when the component mounts
    api.fetchSalesData()
      .then(data => setOrders(data))
      .catch(error => console.error('Error fetching sales data:', error));
  }, []);
>>>>>>> 4d45f02 (Add controllers and middleware directories)

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
