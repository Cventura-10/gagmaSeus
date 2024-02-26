import React, { useState, useEffect } from "react";
import { fetchSalesOrders } from '../../api/api'; // Assuming you have this function

const TransactionList = () => {
  const [salesOrders, setSalesOrders] = useState([]);

  useEffect(() => {
    const loadSalesOrders = async () => {
      try {
        // Assuming fetchSalesOrders is correctly fetching "sales-orders" data
        const data = await fetchSalesOrders();
        setSalesOrders(data);
      } catch (error) {
        console.error("Error fetching sales orders:", error);
      }
    };

    loadSalesOrders();
  }, []);

  return (
    <div>
      {/* Implement rendering for sales orders, e.g., a list */}
      {salesOrders.map((order, index) => (
        <div key={index}> {/* You should use a unique identifier instead of index if possible */}
          <p>Order ID: {order.id}</p>
          {/* Render other order properties here */}
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
