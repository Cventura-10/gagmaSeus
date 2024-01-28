// In components/DashboardWidgets/OutstandingInvoicesWidget.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// This is a function that would ideally fetch real data about outstanding invoices from your backend
// For demonstration purposes, let's use a mocked function which returns dummy data
const fetchOutstandingInvoicesData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ total: 123456.78, count: 42 });
    }, 1000); // Simulates a network delay of 1 second
  });
};

function OutstandingInvoicesWidget() {
  const [invoicesData, setInvoicesData] = useState({ total: 0, count: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    fetchOutstandingInvoicesData().then(data => {
      setInvoicesData(data);
      setIsLoading(false);
    });
  }, []); // The empty array as the second argument ensures this effect only runs once, similar to componentDidMount

  // Loading state
  if (isLoading) {
    return <div className="widget loading">Loading...</div>;
  }

  return (
    <div className="widget outstanding-invoices">
      <h2>Outstanding Invoices</h2>
      <p><strong>Total Amount:</strong> ${invoicesData.total.toFixed(2)}</p>
      <p><strong>Count:</strong> {invoicesData.count}</p>
      {/* Link to the detailed invoices page */}
      <Link to="/invoices">View Details</Link>
    </div>
  );
}

export default OutstandingInvoicesWidget;
