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
import './Accounting.css'; // This CSS file should already exist in your project

function Accounting() {
  const [financialData, setFinancialData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('API_URL', { // Replace 'API_URL' with your actual endpoint
          headers: {
            'x-api-key': 'YOUR_API_KEY', // Replace 'YOUR_API_KEY' with your actual API key
          },
        });
        setFinancialData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching financial data');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading financial data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="accounting">
      <header className="header">
        <h1>Accounting Dashboard</h1>
      </header>
      
      <main className="main-content">
        {/* Display financial data here when available */}
        <pre>{JSON.stringify(financialData, null, 2)}</pre>
      </main>

      <footer className="footer">
        <p>© BikeWorld Accounting - All financial data is confidential.</p>
      </footer>
>>>>>>> 4d45f02 (Add controllers and middleware directories)
    </div>
  );
};

export default Accounting;
