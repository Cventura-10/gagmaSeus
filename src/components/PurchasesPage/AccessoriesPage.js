// AccessoriesPage.js

import React, { useState, useEffect } from 'react';
import { fetchData } from '../../api/myApi'; // Adjust the import based on your project structure

const AccessoriesPage = () => {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    // Fetch accessories data from the API when the component mounts
    const fetchAccessories = async () => {
      try {
        const response = await fetchData('accessories'); // Adjust the endpoint based on your API
        setAccessories(response);
      } catch (error) {
        console.error('Error fetching accessories data:', error);
      }
    };

    fetchAccessories();
  }, []);

  return (
    <div>
      <h2>Accessories Page</h2>
      {accessories.length > 0 ? (
        <ul>
          {accessories.map((accessory) => (
            <li key={accessory.id}>{accessory.name}</li>
          ))}
        </ul>
      ) : (
        <p>No accessories available.</p>
      )}
    </div>
  );
};

export default AccessoriesPage;
