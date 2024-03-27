<<<<<<< HEAD
const express = require('express');
=======
// Check for connections
require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
>>>>>>> 4d45f02 (Add controllers and middleware directories)
const cors = require('cors');

const app = express();
// Configure CORS to allow specific origins or all (*) for development
const corsOptions = {
  origin: '*', // for production, replace '*' with your frontend's URL, e.g., 'https://myfrontend.com'
};
app.use(cors());

<<<<<<< HEAD
// Mock sales data
const salesData = [
  { id: 1, name: 'Product A', value: 100 },
  { id: 2, name: 'Product B', value: 200 },
];
=======
// Middleware
app.use(express.json());
app.use(cors());
>>>>>>> 4d45f02 (Add controllers and middleware directories)

// Endpoint to get sales data
app.get('/api/sales', (req, res) => {
  res.json(salesData);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
