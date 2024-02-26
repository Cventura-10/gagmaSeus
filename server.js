// At the top of your server file to ensure environment variables are read as early as possible
require('dotenv').config(); 
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5001;
// Destructuring environment variables for easier access
const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_HOST, MONGODB_DATABASE } = process.env;

// Set the strictQuery option to false before establishing the MongoDB connection
// This is typically used for configuring Mongoose settings
mongoose.set('strictQuery', false);

// Middleware for parsing JSON and serving static files
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection URI
const uri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_HOST}/${MONGODB_DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
  // Starting the server should be inside the connection success callback
  // This ensures we don't start the server if the database connection fails
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Placeholder for API routes or other routes
// app.use('/api/routeName', routeHandler);

// Set a fallback route to serve the React application from any other request not handled above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
