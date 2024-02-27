import React, { useEffect, useState } from 'react';

const PurchasesList = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const apiKey = 'KfT0I9yG2osxHARGamTBEjCEUH2QlV1iuu2xefpbTIfCMferjNo1qR43jqEzKnoU';

    fetch('https://us-east-1.aws.data.mongodb-api.com/app/data-efauf/endpoint/data/v1/purchases', {
      headers: {
        'x-api-key': apiKey
      }
    })
      .then(response => response.json())
      .then(data => setPurchases(data));
  }, []);

  return (
    <div>
      <h3>Purchases List</h3>
      <ul>
        {purchases.map(purchase => (
          <li key={purchase.id}>{purchase.productName}: ${purchase.totalPrice}</li>
        ))}
      </ul>
    </div>
  );
}

export default PurchasesList;
