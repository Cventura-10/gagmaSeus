import React from 'react';

const SpecialOffersSection = () => {
  return (
    <section className="special-offers-section">
      <h2>Special Offers</h2>
      {/* Add a list of special offers on motorcycles with images, descriptions, and pricing information */}
      <div className="offer">
        <img src={specialOffer1Img} alt="Special Offer 1" />
        <h3>Special Offer 1</h3>
        <p>Don't miss this limited-time offer. Get an amazing motorcycle at an unbeatable price!</p>
        <span className="price">$7,999 (Original Price: $10,999)</span>
        <button>View Offer</button>
      </div>
      <div className="offer">
        {/* Add more special offers */}
      </div>
    </section>
  );
};

export default SpecialOffersSection;
