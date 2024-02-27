import React, { useState } from 'react';

const SalesPage = () => {
  const [saleData, setSaleData] = useState({
    productName: '',
    quantity: 0,
    unitPrice: 0.0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSaleData((prevData) => ({
      ...prevData,
      [name]: name === 'quantity' ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional actions with the entered data here
    console.log('Submitted Sale Data:', saleData);
  };

  return (
    <div className="sales-page">
      <h1>Sales Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            value={saleData.productName}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={saleData.quantity}
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
            value={saleData.unitPrice}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <button type="submit">Submit Sale</button>
      </form>

      {/* Display the entered sale information */}
      <div>
        <h2>Entered Sale Information</h2>
        <p>Product Name: {saleData.productName}</p>
        <p>Quantity: {saleData.quantity}</p>
        <p>Unit Price: ${saleData.unitPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default SalesPage;
