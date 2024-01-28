require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_HOST, MONGODB_DATABASE } = process.env;

// Set the strictQuery option to false before establishing the MongoDB connection
mongoose.set('strictQuery', false);

// Middleware
app.use(express.json());

// MongoDB Connection
const uri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_HOST}/${MONGODB_DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Serve the static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// API routes or other routes
// ...

// Set a fallback route to serve the React application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
