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

export default store;
