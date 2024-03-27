<<<<<<< HEAD
import { combineReducers } from 'redux';
// Import your actual reducers here
import accountingReducer from './accountingReducer';
import dashboardReducer from './dashboardReducer';
import userReducer from './userReducer';
import settingReducer from './settingReducer';
// Note: `settingsReducer.js` and `settingReducer.js` might be a typo or duplicate. Use the correct one.
=======
// src/reducers/index.js
import { combineReducers } from 'redux';
import someReducer from './someReducer'; // Make sure this import is correct
>>>>>>> 3c62d4b (Commit my local changes before merging)

// Combine all reducers into a single rootReducer
const rootReducer = combineReducers({
<<<<<<< HEAD
  // Mapping of state properties to reducers
  accounting: accountingReducer,
  dashboard: dashboardReducer,
  user: userReducer,
  settings: settingReducer,
  // Add other reducers here as needed
=======
  // Ensure that the keys here match what you've referred to in your components
  someState: someReducer,
  // ... potentially other reducers here
>>>>>>> 3c62d4b (Commit my local changes before merging)
});

export default rootReducer;
