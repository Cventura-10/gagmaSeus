<<<<<<< HEAD
// src/api/api.js
const BASE_URL = 'https://us-east-1.aws.data.mongodb-api.com/app/data-efauf/endpoint/data/v1';
const API_KEY = 'YOUR_API_KEY_HERE'; // Replace 'YOUR_API_KEY_HERE' with your actual API key.

async function fetchData(endpoint, payload) {
  const url = `${BASE_URL}/${endpoint}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': API_KEY,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`API call to ${endpoint} failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Fetching data from ${endpoint} failed`, error);
    throw error;
  }
}

export const fetchSalesOrders = async () => {
  const payload = {
    collection: 'salesOrders',
    database: 'yourDatabaseName',
    dataSource: 'yourClusterName',
  };
  return await fetchData('action/find', payload);
};

export const fetchAssets = async () => {
  const payload = {
    collection: 'assets',
    database: 'yourDatabaseName',
    dataSource: 'yourClusterName',
  };
  return await fetchData('action/find', payload);
};

export const fetchLiabilities = async () => {
  const payload = {
    collection: 'liabilities',
    database: 'yourDatabaseName',
    dataSource: 'yourClusterName',
  };
  return await fetchData('action/find', payload);
};
// Within ../../api/api.js

export const fetchProducts = async () => {
  const payload = {
    collection: 'products',
    database: 'yourDatabaseName',
    dataSource: 'yourClusterName',
  };
  return await fetchData('action/find', payload);
};
=======
// api.js
import axios from 'axios';

const API_KEY = 'KfT0I9yG2osxHARGamTBEjCEUH2QlV1iuu2xefpbTIfCMferjNo1qR43jqEzKnoU';
const API_BASE_URL = 'https://us-east-1.aws.data.mongodb-api.com/app/data-efauf/endpoint/data/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Api-Key': API_KEY,
  },
});

export default api;
>>>>>>> 4d45f02 (Add controllers and middleware directories)
