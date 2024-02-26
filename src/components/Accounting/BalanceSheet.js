import React, { useEffect, useState } from 'react';
import { fetchAssets, fetchLiabilities } from '../../api/api';

const BalanceSheet = () => {
  const [assets, setAssets] = useState([]);
  const [liabilities, setLiabilities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const assetsData = await fetchAssets();
        const liabilitiesData = await fetchLiabilities();

        setAssets(assetsData);
        setLiabilities(liabilitiesData);
      } catch (error) {
        console.error('Error fetching balance sheet data:', error);
        // Depending on how you want to handle/display errors, adjust accordingly
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3>Balance Sheet</h3>
      <div>
        <h4>Assets</h4>
        <ul>
          {assets.map(asset => (
            <li key={asset.id}>{asset.name}: ${asset.value}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Liabilities</h4>
        <ul>
          {liabilities.map(liability => (
            <li key={liability.id}>{liability.name}: ${liability.amount}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BalanceSheet;
