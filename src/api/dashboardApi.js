// dashboardApi.js

export const API_KEY = 'KfT0I9yG2osxHARGamTBEjCEUH2QlV1iuu2xefpbTIfCMferjNo1qR43jqEzKnoU'; // Replace 'API-KEY' with your actual API key

export const fetchSalesData = async () => {
  try {
    const response = await fetch('https://us-east-1.aws.data.mongodb-api.com/app/data-efauf/endpoint/data/v1/sales', {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });

    if (!response.ok) {
      // Handle 404 or other error responses
      console.error('Error fetching sales data:', response.status);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching sales data:', error);
    throw error;
  }
};

export const fetchInventoryData = async () => {
  try {
    const response = await fetch('https://us-east-1.aws.data.mongodb-api.com/app/data-efauf/endpoint/data/v1/inventory', {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching inventory data:', error);
    throw error;
  }
};

export const fetchProfitLossData = async () => {
  try {
    const response = await fetch('https://us-east-1.aws.data.mongodb-api.com/app/data-efauf/endpoint/data/v1/profitloss', {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching profit/loss data:', error);
    throw error;
  }
};

export const addSalesData = async (data) => {
  try {
    const response = await fetch('https://us-east-1.aws.data.mongodb-api.com/app/data-efauf/endpoint/data/v1/sales', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      }
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error adding sales data:', error);
    throw error;
  }
};
