import { combineReducers } from 'redux'
import { settingReducer } from './settingReducer' // Named import
import { userReducer } from './userReducer' // Named import
import accountingReducer from './accountingReducer' // Default import

const rootReducer = combineReducers({
  settings: settingReducer,
  users: userReducer,
  accounting: accountingReducer,
})

export default rootReducer
