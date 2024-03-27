import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import App from './App';
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

// Render the app using the created root
root.render(
  <React.StrictMode>
    <Provider store={store}>
<<<<<<< HEAD
      <App /> {/* App component now acts as the sole entry point for component rendering */}
=======
      <BrowserRouter>
        <App />
      </BrowserRouter>
>>>>>>> 4d45f02 (Add controllers and middleware directories)
    </Provider>
  </React.StrictMode>
);

// Other configurations or functions can be added here

reportWebVitals();
