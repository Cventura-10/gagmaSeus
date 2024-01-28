import React from 'react';

const CategoriesSection = () => {
  return (
    <section className="categories-section">
      {/* Add categories of motorcycles with images and descriptions */}
      <div className="category">
        <img src={sportBikesImg} alt="Sport Bikes" />
        <h3>Sport Bikes</h3>
        <p>Accelerate your thrill with these powerful motorcycles built for performance.</p>
      </div>
      <div className="category">
        <img src={cruisersImg} alt="Cruisers" />
        <h3>Cruisers</h3>
        <p>Enjoy a relaxed and comfortable ride with these classic and stylish motorcycles.</p>
      </div>
      <div className="category">
        <img src={adventureBikesImg} alt="Adventure Bikes" />
        <h3>Adventure Bikes</h3>
        <p>Explore the off-road terrain and go on thrilling adventures with these rugged motorcycles.</p>
      </div>
    </section>
  );
};

export default CategoriesSection;
