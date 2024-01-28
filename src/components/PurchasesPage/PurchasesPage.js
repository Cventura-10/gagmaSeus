import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const PurchasesPage = () => {
  const [purchaseData, setPurchaseData] = useState({
    productName: '',
    quantity: 0,
    unitPrice: 0.0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPurchaseData((prevData) => ({
      ...prevData,
      [name]: name === 'quantity' ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional actions with the entered data here
    console.log('Submitted Purchase Data:', purchaseData);
  };

  return (
    <div className="purchases-page">
      <h1>Purchases Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            value={purchaseData.productName}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={purchaseData.quantity}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Unit Price:
          <input
            type="number"
            step="0.01"
            name="unitPrice"
            value={purchaseData.unitPrice}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <button type="submit">Submit Purchase</button>
      </form>

      {/* Display the entered purchase information */}
      <div>
        <h2>Entered Purchase Information</h2>
        <p>Product Name: {purchaseData.productName}</p>
        <p>Quantity: {purchaseData.quantity}</p>
        <p>Unit Price: ${purchaseData.unitPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default PurchasesPage;
