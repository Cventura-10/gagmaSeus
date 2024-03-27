<<<<<<< HEAD
// src/store/store.js
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
<<<<<<< HEAD
import rootReducer from '../reducers'; // Adjusted for clarity based on typical project structure

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(thunk))
);
=======
import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));
>>>>>>> 4d45f02 (Add controllers and middleware directories)
=======
// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'; // Ensure this import is correct

// Initial state object for your Redux store (if you have preloaded state)
// If not, this can also be omitted in createStore()
const initialStore = {};

// Create store with rootReducer, any preloaded state, and thunk middleware
const store = createStore(
  rootReducer,
  initialStore,
  applyMiddleware(thunk)
);
>>>>>>> 3c62d4b (Commit my local changes before merging)

export default store;
