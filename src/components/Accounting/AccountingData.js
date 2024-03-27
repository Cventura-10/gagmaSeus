// Accounting.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Accounting = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://us-east-1.aws.data.mongodb-api.com/app/data-efauf/endpoint/data/v1/transactions', {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'KfT0I9yG2osxHARGamTBEjCEUH2QlV1iuu2xefpbTIfCMferjNo1qR43jqEzKnoU'
          }
        });
        setTransactions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="accounting-container">
      {/* Display transactions */}
      <div className="transactions">
        {transactions.map(transaction => (
          <div key={transaction.id}>
            <h3>{transaction.description}</h3>
            <p>Amount: {transaction.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accounting;
