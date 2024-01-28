// In components/DashboardWidgets/TotalSalesWidget.js
import React from 'react';
import { Link } from 'react-router-dom';

function TotalSalesWidget() {
  // Here you would typically fetch and render the total sales
  return (
    <div className="widget total-sales">
      <h2>Total Sales</h2>
      {/* Render the total sales number */}
      <Link to="/sales">View Details</Link>
    </div>
  );
}

// Export this component
export default TotalSalesWidget;

// Similarly create PendingOrdersWidget, OutstandingInvoicesWidget, and UpcomingEventsWidget
