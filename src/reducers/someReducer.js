// src/reducers/someReducer.js
<<<<<<< HEAD

// Define initial state
const initialState = {
    count: 0,
    items: [],
    isLoading: false,
    error: null,
  };
  
  // Define action types as constants (optional but recommended)
  const INCREMENT = 'INCREMENT';
  const DECREMENT = 'DECREMENT';
  const ADD_ITEM = 'ADD_ITEM';
  const FETCH_ITEMS_START = 'FETCH_ITEMS_START';
  const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
  const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';
  
  // Define the reducer function
  const someReducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          count: state.count + 1,
        };
      case DECREMENT:
        return {
          ...state,
          count: state.count - 1,
        };
      case ADD_ITEM:
        return {
          ...state,
          items: [...state.items, action.payload], // Assuming payload contains a new item
        };
      case FETCH_ITEMS_START:
        return {
          ...state,
          isLoading: true,
        };
      case FETCH_ITEMS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          items: action.payload, // Assuming payload contains fetched items
        };
      case FETCH_ITEMS_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload, // Assuming payload contains an error message
        };
      default:
        return state;
    }
  };
  
  export default someReducer;
=======
const initialState = {
    // Define your initial state here
  };
  
  export default function someReducer(state = initialState, action) {
    switch (action.type) {
      // Handle actions here
      default:
        return state;
    }
  }
>>>>>>> 3c62d4b (Commit my local changes before merging)
  