// Example fetchData.js
async function fetchData(url) {
    try {
      const response = await fetch(url);
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Failed to fetch data: ", error);
      throw error;
    }
  }
  
  export default fetchData;
  