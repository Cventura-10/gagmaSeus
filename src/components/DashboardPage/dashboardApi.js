// Import axios or your preferred HTTP client library
import axios from 'axios';

const BASE_URL = 'https://us-east-1.aws.data.mongodb-api.com/app/data-efauf/endpoint/data/v1';
const API_KEY = 'API KeyKfT0I9yG2osxHARGamTBEjCEUH2QlV1iuu2xefpbTIfCMferjNo1qR43jqEzKnoU';

export const fetchSalesData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/sales`, { headers: { 'x-api-key': API_KEY } });
    return response.data; // Adjust based on your API response structure
  } catch (error) {
    throw error;
  }
};

export const fetchInventoryData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/inventory`, { headers: { 'x-api-key': API_KEY } });
    return response.data; // Adjust based on your API response structure
  } catch (error) {
    throw error;
  }
};

export const fetchProfitLossData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/profit-loss`, { headers: { 'x-api-key': API_KEY } });
    return response.data; // Adjust based on your API response structure
  } catch (error) {
    throw error;
  }
};
