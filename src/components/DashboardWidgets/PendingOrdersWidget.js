// Example inside PendingOrdersWidget.js
import React from 'react';
import { Link } from 'react-router-dom';

function PendingOrdersWidget() {
  // Logic to fetch and display the number of pending orders

  return (
    <div className="widget pending-orders">
      <h2>Pending Orders</h2>
      {/* Display the number of pending orders */}
      <Link to="/orders">View Details</Link>
    </div>
  );
}

export default PendingOrdersWidget;
