// File path: src/components/ExampleComponent.js
import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
  const [message, setMessage] = useState("Waiting for something...");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("The wait is over!");
    }, 1000);

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>{message}</div>
  );
};

export default ExampleComponent;
