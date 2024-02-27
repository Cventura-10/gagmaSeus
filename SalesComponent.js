import React, { useEffect, useState } from 'react';
import { fetchSalesData } from '../../api/api'; // This needs to support aborting, adjust accordingly

const SalesComponent = () => {
  const [salesData, setSalesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchSalesData({ signal })
      .then(data => {
        setSalesData(data);
        setIsLoading(false);
      })
      .catch(error => {
        if (error.name !== 'AbortError') {
          console.error('Failed to fetch sales data:', error);
          setError(error.message);
          setIsLoading(false);
        }
      });

    return () => {
      controller.abort(); // Cleanup: aborts the fetch request on component unmount
    };
  }, []);

  if (isLoading) return <div>Loading sales data...</div>;
  if (error) return <div>Error fetching sales data: {error}</div>;

  return (
    <div>
      <h2>Sales Data</h2>
      <ul>
        {salesData.map(item => (
          <li key={item.id}>{item.name}: ${item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default SalesComponent;
