import React, { useEffect, useState } from 'react';

const IncomeStatement = () => {
  const [incomeItems, setIncomeItems] = useState([]);

  useEffect(() => {
    const apiKey = 'KfT0I9yG2osxHARGamTBEjCEUH2QlV1iuu2xefpbTIfCMferjNo1qR43jqEzKnoU';

    fetch('https://us-east-1.aws.data.mongodb-api.com/app/data-efauf/endpoint/data/v1/income-statement', {
      headers: {
        'x-api-key': apiKey
      }
    })
      .then(response => response.json())
      .then(data => setIncomeItems(data));
  }, []);

  return (
    <div>
      <h3>Income Statement</h3>
      <ul>
        {incomeItems.map(item => (
          <li key={item.id}>{item.name}: ${item.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default IncomeStatement;
