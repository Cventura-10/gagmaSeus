import React, { useEffect, useState } from 'react';

const SalesList = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const apiKey = 'KfT0I9yG2osxHARGamTBEjCEUH2QlV1iuu2xefpbTIfCMferjNo1qR43jqEzKnoU';

    fetch('https://us-east-1.aws.data.mongodb-api.com/app/data-efauf/endpoint/data/v1/sales', {
      headers: {
        'x-api-key': apiKey
      }
    })
      .then(response => response.json())
      .then(data => setSales(data));
  }, []);

  return (
    <div>
      <h3>Sales List</h3>
      <ul>
        {sales.map(sale => (
          <li key={sale.id}>{sale.productName}: ${sale.totalPrice}</li>
        ))}
      </ul>
    </div>
  );
}

export default SalesList;
