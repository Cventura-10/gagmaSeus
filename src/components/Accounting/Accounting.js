import React, { useState, useEffect } from 'react';
import fetchData from '../../utils/fetchData';

const Accounting = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const fetchAndSetSalesData = async () => {
      try {
        // Adjust 'https://example.com/api/sales' with your actual API endpoint for sales data
        const data = await fetchData('https://example.com/api/sales');
        setSalesData(data);
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
    };

    fetchAndSetSalesData();
  }, []);

  return (
    <div>
      <h2>Sales Data</h2>
      <ul>
        {salesData.map((item, index) => (
          <li key={index}>
            {item.name} {/* Adjust this based on your actual data structure */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accounting;
