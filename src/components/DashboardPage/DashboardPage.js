// src/components/DashboardPage/DashboardPage.js
import React, { useEffect } from 'react';
import './DashboardPage.css';
import { fetchSalesData, fetchInventoryData, fetchProfitLossData } from '../../api/dashboardApi'; // Updated import

const DashboardPage = () => {
  useEffect(() => {
    try {
      // Dispatch actions to fetch data when the component mounts
      fetchSalesData();
      fetchInventoryData();
      fetchProfitLossData();

      // Example usage of fetchData function (if needed in the future)
      // const result = await fetchData('someEndpoint');
      // console.log('Fetched Data:', result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  // Rest of your component code

  return (
    <div className="dashboard-page">
      {/* Your component content */}
    </div>
  );
};

export default DashboardPage;
