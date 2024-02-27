import axios from 'axios';

const API = axios.create({ baseURL: 'https://us-east-1.aws.data.mongodb-api.com/app/data-efauf/endpoint/data/v1/' });

// Set up interceptor to inject the API key into headers of all requests
API.interceptors.request.use((config) => {
  config.headers['x-api-key'] = process.env.REACT_APP_API_KEY;
  return config;
});
export const fetchSalesOrders = () => API.get('sales-orders');

export const fetchTransactions = () => API.get('transactions');
export const fetchAccounts = () => API.get('chart-of-accounts');
export const fetchAssets = () => API.get('assets');
export const fetchLiabilities = () => API.get('liabilities');
