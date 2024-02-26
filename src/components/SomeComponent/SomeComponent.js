import React from 'react';
import { useData } from './DataContext'; // Adjust the import path as needed

const SomeComponent = () => {
  const { data, isLoading, error } = useData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data && data.map(item => <p key={item.id}>{item.content}</p>)}
    </div>
  );
};

export default SomeComponent;
