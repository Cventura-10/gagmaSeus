// src/reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import dashboardReducer from './dashboardReducer';
// Import other reducers as needed

const rootReducer = combineReducers({
  user: userReducer,
  dashboard: dashboardReducer,
  // Add other reducers here
});

export default rootReducer;
