<<<<<<< HEAD
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
=======
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Accounting.css'; // Import CSS file for styling

function Accounting() {
  const [financialData, setFinancialData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://us-east-1.aws.data.mongodb-api.com/app/data-efauf/endpoint/data/v1', {
          headers: {
            'x-api-key': 'API KeyKfT0I9yG2osxHARGamTBEjCEUH2QlV1iuu2xefpbTIfCMferjNo1qR43jqEzKnoU',
          },
        });

        const data = response.data;
        setFinancialData(data);
      } catch (error) {
        console.error('Error fetching financial data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="accounting">
      <header className="header">
        <h1>Accounting Dashboard</h1>
      </header>
      
      <main className="main-content">
        {/* Display financial data */}
        {financialData ? (
          <div>
            {/* Display financial data here */}
            <p>{JSON.stringify(financialData)}</p>
          </div>
        ) : (
          <p>Loading financial data...</p>
        )}
      </main>

      <footer className="footer">
        <p>© BikeWorld Accounting - All financial data is confidential.</p>
      </footer>
>>>>>>> 4d45f02 (Add controllers and middleware directories)
    </div>
  );
};

export default Accounting;
