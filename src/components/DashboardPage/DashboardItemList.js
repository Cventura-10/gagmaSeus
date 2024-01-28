// components/DashboardPage/DashboardItemList.js
import React from 'react';

const DashboardItemList = () => {
  const items = [
    'Dashboard',
    'Accounting',
    'History Overview',
    'View Full History',
    'Payables Overview',
    'View All Payables',
    // Add more items as needed
  ];

  return (
    <div>
      <h2>Dashboard Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardItemList;
