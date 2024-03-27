// http-client.js
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = { fetch };

// Usage in another file
const { fetch } = require('./http-client');

async function getExample() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
}

getExample();
