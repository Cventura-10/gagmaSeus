// src/reducers/index.js
import { combineReducers } from 'redux'
import settingReducer from './settingReducer'
import userReducer from './userReducer'
import accountingReducer from './accountingReducer'

const rootReducer = combineReducers({
  settings: settingReducer,
  users: userReducer,
  accounting: accountingReducer,
})

export default rootReducer
