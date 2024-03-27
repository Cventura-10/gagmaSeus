<<<<<<< HEAD
<<<<<<< HEAD
const express = require('express');
=======
// Check for connections
=======
>>>>>>> 3c62d4b (Commit my local changes before merging)
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

<<<<<<< HEAD
// Endpoint to get sales data
app.get('/api/sales', (req, res) => {
  res.json(salesData);
=======
// MongoDB Connection
const uri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_HOST}/${MONGODB_DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
    // Instead of listening here, we move this to the end after all routes have been defined
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Optionally stop the process if the database connection fails
  });

// Serve the static files from the React app build directory after they've been generated
// Make sure 'build' directory is the output of your React app npm run build
app.use(express.static(path.join(__dirname, 'build')));

// API routes or other middleware can go here, before the catch-all route handler
// ...

// The catch-all handler for any request that doesn't match any routes above
// Send back React's index.html file if no other route matches
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Only listen after MongoDB has successfully connected
mongoose.connection.once('open', () => {
  app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
>>>>>>> 3c62d4b (Commit my local changes before merging)
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
