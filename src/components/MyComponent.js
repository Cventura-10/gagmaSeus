import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { InventoryData, ProfitLossData } from '@/actions/types';

const MyComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'KfT0I9yG2osxHARGamTBEjCEUH2QlV1iuu2xefpbTIfCMferjNo1qR43jqEzKnoU';
        const urlEndpoint = 'https://us-east-1.aws.data.mongodb-api.com/app/data-efauf/endpoint/data/v1';

        const inventoryResponse = await axios.get(`${urlEndpoint}/inventory`, {
          headers: {
            'x-api-key': apiKey,
          },
        });

        const profitLossResponse = await axios.get(`${urlEndpoint}/profit-loss`, {
          headers: {
            'x-api-key': apiKey,
          },
        });

        dispatch({
          type: InventoryData,
          payload: {
            totalItems: inventoryResponse.data.totalItems,
            // Adjust as per response structure
          },
        });

        dispatch({
          type: ProfitLossData,
          payload: {
            netProfit: profitLossResponse.data.netProfit,
            // Adjust as per response structure
          },
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      // Clean-up function
      // Perform any cleanup tasks here
    };
  }, [dispatch]);

  return (
    <div>
      <h1>My Component</h1>
      <p>This is my custom component JSX.</p>
    </div>
  );
};

export default MyComponent;
