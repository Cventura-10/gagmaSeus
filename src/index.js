import React from 'react';
import ReactDOM from 'react-dom/client'; // Corrected import for ReactDOM
import { Provider } from 'react-redux';
import store from './store/store'; // Corrected import path pointing to the store.js location
import App from './App';
<<<<<<< HEAD
import reportWebVitals from './reportWebVitals';
import './index.css'; // Make sure your global styles are imported

<<<<<<< HEAD
// The root application element
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
=======
// Create the root without passing the container here
const root = createRoot(document.getElementById('root'));
>>>>>>> 4d45f02 (Add controllers and middleware directories)
=======

// Get the root container element
const container = document.getElementById('root');
// Ensure that there is a div with id 'root' in your public/index.html file
>>>>>>> 3c62d4b (Commit my local changes before merging)

// Use createRoot to manage the root React container
const root = ReactDOM.createRoot(container);

// Render the App wrapped within React.StrictMode and Redux Provider components
root.render(
  <React.StrictMode>
    <Provider store={store}>
<<<<<<< HEAD
<<<<<<< HEAD
      <App /> {/* App component now acts as the sole entry point for component rendering */}
=======
      <BrowserRouter>
        <App />
      </BrowserRouter>
>>>>>>> 4d45f02 (Add controllers and middleware directories)
=======
      <App />
>>>>>>> 3c62d4b (Commit my local changes before merging)
    </Provider>
  </React.StrictMode>
);
