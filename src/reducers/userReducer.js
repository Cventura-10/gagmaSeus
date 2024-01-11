// src/reducers/userReducer.js

// Initial state of the users
const initialUsersState = {
  // Add default users parameters or their initial values here
  // Example: usersList: [], selectedUser: null
}

// userReducer with 'SET_USER' action handling
export const userReducer = (state = initialUsersState, action) => {
  switch (action.type) {
    case 'SET_USER': // Handle action for setting user details
      // Assumes an action with type 'SET_USER' and payload containing user data
      return { ...state, ...action.payload } // Reducer updates state with payload data

    // Insert other case actions as needed

    // Always return the state by default if no action matches
    default:
      return state
  }
}
