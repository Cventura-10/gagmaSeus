import React from 'react';

const SalesOrders = () => {
  const orders = [
    { id: 1, productName: 'Product A', quantity: 3 },
    { id: 2, productName: 'Product B', quantity: 5 },
    { id: 3, productName: 'Product C', quantity: 2 },
  ];

  return (
    <div>
      <h1>Sales Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.productName}</td>
              <td>{order.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesOrders;
