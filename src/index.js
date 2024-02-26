import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'; // Make sure your global styles are imported

// The root application element
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App /> {/* App component now acts as the sole entry point for component rendering */}
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
