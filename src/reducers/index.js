// reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import dashboardReducer from './dashboardReducer'; // or whatever your dashboard reducer is called

const rootReducer = combineReducers({
  user: userReducer,
  dashboard: dashboardReducer,
  // ...other reducers
});

export default rootReducer;
