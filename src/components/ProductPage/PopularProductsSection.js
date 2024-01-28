import React from 'react';

const PopularProductsSection = () => {
  return (
    <section className="popular-products-section">
      <h2>Popular Products</h2>
      {/* Add a list of popular motorcycles with images, brief descriptions, and pricing information */}
      <div className="product">
        <img src={bike1Img} alt="Motorcycle 1" />
        <h3>Motorcycle 1</h3>
        <p>This incredible motorcycle will revolutionize your riding experience. Don't miss out!</p>
        <span className="price">$9,999</span>
        <button>Add to Cart</button>
      </div>
      <div className="product">
        {/* Add more popular motorcycles */}
      </div>
      {/* Add more products */}
    </section>
  );
};

export default PopularProductsSection;
