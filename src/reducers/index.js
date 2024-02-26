import { combineReducers } from 'redux';
// Import your actual reducers here
import accountingReducer from './accountingReducer';
import dashboardReducer from './dashboardReducer';
import userReducer from './userReducer';
import settingReducer from './settingReducer';
// Note: `settingsReducer.js` and `settingReducer.js` might be a typo or duplicate. Use the correct one.

// Combine all reducers into a single rootReducer
const rootReducer = combineReducers({
  // Mapping of state properties to reducers
  accounting: accountingReducer,
  dashboard: dashboardReducer,
  user: userReducer,
  settings: settingReducer,
  // Add other reducers here as needed
});

export default rootReducer;
