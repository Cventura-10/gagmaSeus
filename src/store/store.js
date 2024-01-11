import { createStore, compose } from 'redux'
import rootReducer from '../reducers' // Assuming the file path is correct.

// If Redux DevTools Extension is to be enabled and no middleware is used.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(),
  // applyMiddleware(...middleware),
  // If you have any middleware, you can insert them in the above line. Example:
  // applyMiddleware(thunkMiddleware, loggerMiddleware)
)

export default store
